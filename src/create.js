/*
  Generates a series of PDF files with QR codes. Each QR code is a 'child' of
  the mothership wallet.
*/

"use strict"

const BITBOXSDK = require("bitbox-sdk")
const BITBOX = new BITBOXSDK()
const QRCode = require("qrcode")
const touch = require("touch")
const mkdirp = require("mkdirp")
const fs = require("fs")
const pdf = require("html-pdf")
const emoji = require("node-emoji")
const chalk = require("chalk")
const addresses = []
const htmlTemplatePublic = require("./html-template03a")
const htmlTemplatePrivate = require("./html-template03b")

const htmlDir = `${__dirname}/../output/html`

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// Open the wallet generated with generate-wallet.
const main = async () => {
  let mnemonicObj
  try {
    mnemonicObj = require(`${__dirname}/../output/wallets/motherShipWallet.json`)
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
  mkdirp(`${htmlDir}`, err => {})
  mkdirp(`${htmlDir}/privKeyWIFs`, err => {})

  // root seed buffer
  const rootSeed = BITBOX.Mnemonic.toSeed(mnemonicObj.mnemonic)

  // master HDNode
  const masterHDNode = BITBOX.HDNode.fromSeed(rootSeed)

  // BIP44
  const bip44 = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'")

  for (let i = 0; i < addressCount; i++) {
    console.log(`html: ${i}`)
    await sleep(100)
    // derive the ith external change address from the BIP44 account HDNode
    const node = BITBOX.HDNode.derivePath(
      bip44,
      //`${result.hdAccount ? result.hdAccount : 0}'/0/${i}`
      `0'/0/${i}`
    )

    // get the priv key in wallet import format
    const wif = BITBOX.HDNode.toWIF(node)
    console.log(`WIF for address ${i}: ${wif}`)

    // Get the public key for the WIF.
    const pubAddr = BITBOX.HDNode.toCashAddress(node)
    // pubAddr = BITBOX.Address.toCashAddress(pubAddr, false)
    console.log(`pubAddr: ${pubAddr}`)

    // Generate the artwork for the public address.
    await createPublic(pubAddr, i)

    // Generate the artwork for the private key.
    await createPrivate(wif, i)
  }

  console.log(chalk.green("All done."), emoji.get(":white_check_mark:"))
  console.log(emoji.get(":rocket:"), `html and pdfs written successfully.`)
}
main()

async function createPublic(addr, i) {
  try {
    // create empty html file
    touch(`${htmlDir}/privKeyWIFs/paper-wallet-wif-public-${i}.html`)

    const qrOptions = {
      // width: 450,
      width: 525,
      margin: 0
    }

    // const wifQR = await QRCode.toDataURL(wif, qrOptions)

    const pubQR = await QRCode.toDataURL(addr, qrOptions)

    // Generate an HTML page from the dat.
    const htmlConfig = { pubAddr: addr, pubQR }
    const htmlData = htmlTemplatePublic(htmlConfig)

    // save to html file
    fs.writeFileSync(
      `${htmlDir}/privKeyWIFs/paper-wallet-wif-public-${i}.html`,
      htmlData
    )
  } catch (err) {
    console.error(`Error in createPublic()`)
    throw err
  }
}

async function createPrivate(wif, i) {
  try {
    // create empty html file
    touch(`${htmlDir}/privKeyWIFs/paper-wallet-wif-private-${i}.html`)

    const qrOptions = {
      // width: 450,
      width: 525,
      margin: 0
    }

    // const wifQR = await QRCode.toDataURL(wif, qrOptions)

    const wifQR = await QRCode.toDataURL(wif, qrOptions)

    // Generate an HTML page from the dat.
    const htmlConfig = { wifQR, wif }
    const htmlData = htmlTemplatePrivate(htmlConfig)

    // save to html file
    fs.writeFileSync(
      `${htmlDir}/privKeyWIFs/paper-wallet-wif-private-${i}.html`,
      htmlData
    )
  } catch (err) {
    console.error(`Error in createPrivate()`)
    throw err
  }
}
