/*
  This script creates BCH paper wallets.

  Use the constants to customize the script for your use.
*/

// CUSTOMIZE THESE VARIABLES
// START ----->

// The number of paper wallets to generate.
const NUM_WALLETS = 10

// <---- END

const QRCode = require("qrcode")
const touch = require("touch")
const mkdirp = require("mkdirp")
const fs = require("fs")

const BCHJS = require("@psf/bch-js")
const bchjs = new BCHJS()

const htmlDir = `${__dirname.toString()}/../output/html`
const htmlTemplatePublic = require("./html-template03a")
const htmlTemplatePrivate = require("./html-template03b")

async function start() {
  try {
    // create needed directory structure
    mkdirp(`${htmlDir}`, err => {})

    const mnemonic = bchjs.Mnemonic.generate(
      128,
      bchjs.Mnemonic.wordLists().english
    )

    // root seed buffer
    const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic)

    // master HDNode
    const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

    // HD wallet BIP44 standard derivation path of 145 used for BCH.
    console.log("BIP44 Account: \"m/44'/145'/0'\"")

    const wallets = []

    // Generate the first 10 seed addresses.
    for (let i = 0; i < NUM_WALLETS; i++) {
      const childNode = masterHDNode.derivePath(`m/44'/145'/0'/0/${i}`)

      const outObj = {}
      outObj.cashAddress = bchjs.HDNode.toCashAddress(childNode)
      outObj.WIF = bchjs.HDNode.toWIF(childNode)

      wallets.push(outObj)
    }
    // console.log(`wallets: ${JSON.stringify(wallets, null, 2)}`)

    // Generate a random number for the first half of the serial number.
    const rnd = generateRando()

    for (let i = 0; i < NUM_WALLETS; i++) {
      console.log(`\npaper wallet: ${i}`)

      // get the priv key in wallet import format
      const wif = wallets[i].WIF
      console.log(`WIF for address ${i}: ${wif}`)

      // Get the public key for the WIF.
      const pubAddr = bchjs.SLP.Address.toSLPAddress(wallets[i].cashAddress)
      console.log(`pubAddr: ${pubAddr}`)

      // Generate the artwork for the public address.
      await createPublic(pubAddr, i, rnd)

      // Generate the artwork for the private key.
      await createPrivate(wif, i, rnd)
    }
  } catch (err) {
    console.log("Error: ", err)
  }
}
start()

// Generates a 3-digit random number string.
function generateRando() {
  let rnd = Math.random()

  rnd = rnd * 1000

  rnd = Math.floor(rnd)

  const str = `000${rnd}`

  return str.slice(-3)
}

async function createPublic(addr, i, rnd) {
  try {
    // create empty html file
    touch(`${htmlDir}/paper-wallet-wif-public-${i}.html`)

    const qrOptions = {
      // width: 450,
      width: 525,
      margin: 0
    }

    // const wifQR = await QRCode.toDataURL(wif, qrOptions)

    const pubQR = await QRCode.toDataURL(addr, qrOptions)

    // Generate an HTML page from the dat.
    const htmlConfig = { pubAddr: addr, pubQR, i, rnd }
    const htmlData = htmlTemplatePublic(htmlConfig)

    // save to html file
    fs.writeFileSync(`${htmlDir}/paper-wallet-wif-public-${i}.html`, htmlData)
  } catch (err) {
    console.error(`Error in createPublic()`)
    throw err
  }
}

async function createPrivate(wif, i, rnd) {
  try {
    // create empty html file
    touch(`${htmlDir}/paper-wallet-wif-private-${i}.html`)

    const qrOptions = {
      // width: 450,
      width: 525,
      margin: 0
    }

    // const wifQR = await QRCode.toDataURL(wif, qrOptions)

    const wifQR = await QRCode.toDataURL(wif, qrOptions)

    // Generate an HTML page from the dat.
    const htmlConfig = { wifQR, wif, i, rnd }
    const htmlData = htmlTemplatePrivate(htmlConfig)

    // save to html file
    fs.writeFileSync(`${htmlDir}/paper-wallet-wif-private-${i}.html`, htmlData)
  } catch (err) {
    console.error(`Error in createPrivate()`)
    throw err
  }
}
