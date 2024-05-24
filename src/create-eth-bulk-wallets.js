/*
  This script creates ETH paper wallets.

  Use the constants to customize the script for your use.
*/

// CUSTOMIZE THESE VARIABLES
// START ----->

// The number of paper wallets to generate.
const NUM_WALLETS = 9

// <---- END

// Global npm libraries
const QRCode = require('qrcode')
const touch = require('touch')
const mkdirp = require('mkdirp')
const fs = require('fs')
const { ethers } = require('ethers')

const htmlDir = `${__dirname.toString()}/../output/html`
const htmlTemplatePublic = require('./templates/html-template06a')
const htmlTemplatePrivate = require('./templates/html-template06b')

async function start () {
  try {
    // create needed directory structure
    mkdirp(`${htmlDir}`, err => { if (err) console.error('Error creating dir: ', err) })

    // Generate a random number for the first half of the serial number.
    const rnd = generateRando()

    const pubDatas = []
    const privDatas = []

    for (let i = 0; i < NUM_WALLETS; i++) {
      const wallet = ethers.Wallet.createRandom()

      console.log(`\npaper wallet: ${i}`)

      // get the priv key
      const privKey = wallet.privateKey
      console.log(`private key for address ${i}: ${privKey}`)

      // Get the public address for the WIF.
      const pubAddr = wallet.address
      console.log(`pubAddr: ${wallet.address}`)

      const pubData = {pubAddr, rnd}
      pubDatas.push(pubData)

      const privData = {wif: privKey, rnd}
      privDatas.push(privData)

      // Generate the artwork for the public address.
      // await createPublic(pubAddr, i, rnd)

      // Generate the artwork for the private key.
      // await createPrivate(privKey, i, rnd)
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

// async function createPublic (addr, i, rnd) {
//   try {
//     // create empty html file
//     touch(`${htmlDir}/paper-wallet-wif-public-${i}.html`)
//
//     const qrOptions = {
//       // width: 450,
//       width: 525,
//       margin: 0
//     }
//
//     const pubQR = await QRCode.toDataURL(addr, qrOptions)
//
//     // Generate an HTML page from the dat.
//     const htmlConfig = { pubAddr: addr, pubQR, i, rnd }
//     const htmlData = htmlTemplatePublic(htmlConfig)
//
//     // save to html file
//     fs.writeFileSync(`${htmlDir}/paper-wallet-wif-public-${i}.html`, htmlData)
//   } catch (err) {
//     console.error(`Error in createPublic()`)
//     throw err
//   }
// }

// async function createPrivate (wif, i, rnd) {
//   try {
//     // create empty html file
//     touch(`${htmlDir}/paper-wallet-wif-private-${i}.html`)
//
//     const qrOptions = {
//       // width: 450,
//       width: 525,
//       margin: 0
//     }
//
//     const wifQR = await QRCode.toDataURL(wif, qrOptions)
//
//     // Generate an HTML page from the dat.
//     const htmlConfig = { wifQR, wif, i, rnd }
//     const htmlData = htmlTemplatePrivate(htmlConfig)
//
//     // save to html file
//     fs.writeFileSync(`${htmlDir}/paper-wallet-wif-private-${i}.html`, htmlData)
//   } catch (err) {
//     console.error(`Error in createPrivate()`)
//     throw err
//   }
// }
