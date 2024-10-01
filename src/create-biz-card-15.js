/*
  This script creates BCH paper wallets.

  Use the constants to customize the script for your use.
*/

// CUSTOMIZE THESE VARIABLES
// START ----->

// The number of paper wallets to generate.
const NUM_WALLETS = 15

// <---- END

const QRCode = require('qrcode')
const touch = require('touch')
const mkdirp = require('mkdirp')
const fs = require('fs')

const BCHJS = require('@psf/bch-js')
const bchjs = new BCHJS()

const htmlDir = `${__dirname.toString()}/../output/html`
const htmlTemplatePublic = require('./templates/html-template09a')
const htmlTemplatePrivate = require('./templates/html-template08b')

async function start () {
  try {
    // create needed directory structure
    mkdirp(`${htmlDir}`, err => { console.error('Error creating dir: ', err) })

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

    const pubDatas = []
    const privDatas = []

    for (let i = 0; i < NUM_WALLETS; i++) {
      console.log(`\npaper wallet: ${i}`)

      // get the priv key in wallet import format
      const wif = wallets[i].WIF
      console.log(`WIF for address ${i}: ${wif}`)

      // Get the public key for the WIF.
      const pubAddr = wallets[i].cashAddress
      console.log(`pubAddr: ${pubAddr}`)

      const pubData = {pubAddr, rnd}
      pubDatas.push(pubData)

      const privData = {wif, rnd}
      privDatas.push(privData)
    }

    // Generate the artwork for the public address.
    await createPublic(pubDatas)

    // Generate the artwork for the private key.
    await createPrivate(privDatas)
  } catch (err) {
    console.log('Error: ', err)
  }
}
start()

// Generates a 3-digit random number string.
function generateRando () {
  let rnd = Math.random()

  rnd = rnd * 1000

  rnd = Math.floor(rnd)

  const str = `000${rnd}`

  return str.slice(-3)
}

async function createPublic (pubDatas = []) {
  try {
    // create empty html file
    touch(`${htmlDir}/paper-wallet-public.html`)

    for (let i = 0; i < pubDatas.length; i++) {
      const pubData = pubDatas[i]

      // Create the QR code artwork.
      const qrOptions = {
        // width: 450,
        width: 225,
        margin: 0
      }
      const pubQR = await QRCode.toDataURL(pubData.pubAddr, qrOptions)

      pubData.pubQR = pubQR

      pubDatas[i] = pubData
    }

    // Generate an HTML page from the dat.
    const htmlConfig = { pubDatas }
    const htmlData = htmlTemplatePublic(htmlConfig)

    // save to html file
    fs.writeFileSync(`${htmlDir}/paper-wallet-public.html`, htmlData)
  } catch (err) {
    console.error(`Error in createPublic()`)
    throw err
  }
}

async function createPrivate (privDatas = []) {
  try {
    // create empty html file
    touch(`${htmlDir}/paper-wallet-wif-private.html`)

    for (let i = 0; i < privDatas.length; i++) {
      const privData = privDatas[i]

      // Create the QR code artwork.
      const qrOptions = {
        // width: 450,
        width: 225,
        margin: 0
      }
      const privQR = await QRCode.toDataURL(privData.wif, qrOptions)

      privData.privQR = privQR

      privDatas[i] = privData
    }

    // Generate an HTML page from the dat.
    // const htmlConfig = { wifQR, wif, i, rnd }
    const htmlConfig = { privDatas }
    const htmlData = htmlTemplatePrivate(htmlConfig)

    // save to html file
    fs.writeFileSync(`${htmlDir}/paper-wallet-wif-private.html`, htmlData)
  } catch (err) {
    console.error(`Error in createPrivate()`)
    throw err
  }
}
