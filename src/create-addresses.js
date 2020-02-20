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
const htmlTemplate = require("./html-template03a")

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

  // create needed directory structure
  const htmlDir = `${__dirname}/../output/html`
  mkdirp(`${htmlDir}`, err => {})
  mkdirp(`${htmlDir}/privKeyWIFs`, err => {})

  const pdfDir = `${__dirname}/../output/pdf`
  mkdirp(`${pdfDir}`, err => {})
  mkdirp(`${pdfDir}/privKeyWIFs`, err => {})

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

    // create empty html file
    touch(`${htmlDir}/privKeyWIFs/paper-wallet-wif-${i}.html`)

    // // create qr code
    // QRCode.toDataURL(wif, (err, wifQR) => {
    //   // save to html file
    //   fs.writeFileSync(
    //     `${htmlDir}/privKeyWIFs/paper-wallet-wif-${i}.html`,
    //     htmlTemplate(wifQR)
    //   )
    // })

    const qrOptions = {
      // width: 450,
      width: 525,
      margin: 0
    }

    const wifQR = await QRCode.toDataURL(wif, qrOptions)

    const pubQR = await QRCode.toDataURL(pubAddr, qrOptions)

    // Generate an HTML page from the dat.
    const htmlConfig = { pubAddr, pubQR, wifQR, wif }
    const htmlData = htmlTemplate(htmlConfig)

    // save to html file
    fs.writeFileSync(
      `${htmlDir}/privKeyWIFs/paper-wallet-wif-${i}.html`,
      htmlData
    )
  }

  for (let i = 0; i < addressCount; i++) {
    console.log(`pdf: ${i}`)
    await sleep(2000)

    // save to pdf
    var options = {
      // width: "270mm",
      // height: "160mm"
      // type: "jpeg"
      width: "2000px"
      // height: "160mm"
    }

    // get html file
    const privKeyWIFsHtml = fs.readFileSync(
      `${htmlDir}/privKeyWIFs/paper-wallet-wif-${i}.html`,
      "utf8"
    )

    // save to pdf
    pdf
      .create(privKeyWIFsHtml, options)
      .toFile(`${pdfDir}/privKeyWIFs/paper-wallet-wif-${i}.pdf`, (err, res) => {
        if (err) return console.log(err)
      })
  }
  console.log(chalk.green("All done."), emoji.get(":white_check_mark:"))
  console.log(emoji.get(":rocket:"), `html and pdfs written successfully.`)
}

main()
