/*
  Generates a series of PDF files with QR codes. Each QR code is a 'child' of
  the mothership wallet.
*/

'use strict'

// const BITBOXSDK = require("bitbox-sdk")
// const BITBOX = new BITBOXSDK()

const BCHJS = require('@chris.troutner/bch-js')
const bchjs = new BCHJS()

const QRCode = require('qrcode')
const touch = require('touch')
const mkdirp = require('mkdirp')
const fs = require('fs')
const emoji = require('node-emoji')
const chalk = require('chalk')

const htmlTemplatePublic = require('./html-template03a')
const htmlTemplatePrivate = require('./html-template03b')

const htmlDir = `${__dirname}/../output/html`

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// Open the wallet generated with generate-wallet.
const main = async () => {
  let mnemonicObj
  try {
    mnemonicObj = require(`${__dirname}/../output/wallets/wallet.json`)
  } catch (err) {
    console.log(
      `Could not open mnemonic.json. Generate a mnemonic with generate-wallet first.
      Exiting.`
    )
    process.exit(0)
  }

  const addressCount = mnemonicObj.mothership.children
  // const addressCount = 1

  // create needed directory structure
  mkdirp(`${htmlDir}`, err => { console.error('Error creating dir: ', err) })

  // root seed buffer
  const rootSeed = await bchjs.Mnemonic.toSeed(mnemonicObj.mnemonic)

  // master HDNode
  const masterHDNode = bchjs.HDNode.fromSeed(rootSeed)

  // BIP44
  const bip44 = bchjs.HDNode.derivePath(masterHDNode, "m/44'/145'")

  // Generate a random number for the first half of the serial number.
  const rnd = generateRando()
  // console.log(`rnd: ${rnd}`)

  for (let i = 0; i < addressCount; i++) {
    console.log(`html: ${i}`)
    await sleep(100)
    // derive the ith external change address from the BIP44 account HDNode
    const node = bchjs.HDNode.derivePath(
      bip44,
      // `${result.hdAccount ? result.hdAccount : 0}'/0/${i}`
      `0'/0/${i}`
    )

    // get the priv key in wallet import format
    const wif = bchjs.HDNode.toWIF(node)
    console.log(`WIF for address ${i}: ${wif}`)

    // Get the public key for the WIF.
    const pubAddr = bchjs.HDNode.toCashAddress(node)
    // const pubAddr = bchjs.HDNode.toLegacyAddress(node)
    console.log(`pubAddr: ${pubAddr}`)

    // Generate the artwork for the public address.
    await createPublic(pubAddr, i, rnd)

    // Generate the artwork for the private key.
    await createPrivate(wif, i, rnd)
  }

  console.log(chalk.green('All done.'), emoji.get(':white_check_mark:'))
  console.log(emoji.get(':rocket:'), `html files written successfully.`)
}
main()

async function createPublic (addr, i, rnd) {
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

async function createPrivate (wif, i, rnd) {
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

// Generates a 3-digit random number string.
function generateRando () {
  let rnd = Math.random()

  rnd = rnd * 1000

  rnd = Math.floor(rnd)

  const str = `000${rnd}`

  return str.slice(-3)
}
