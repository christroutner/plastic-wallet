/*
  Generates the artwork for a manually input public and private key.
*/

"use strict"

const PUBLIC_ADDR = "public"
const PRIVATE_ADDR = "private"

// const BCHJS = require("@chris.troutner/bch-js")
// const bchjs = new BCHJS()

const QRCode = require("qrcode")
const touch = require("touch")
const mkdirp = require("mkdirp")
const fs = require("fs")
const emoji = require("node-emoji")
const chalk = require("chalk")

const htmlTemplatePublic = require("./html-template03a")
const htmlTemplatePrivate = require("./html-template03b")

const htmlDir = `${__dirname}/../output/html`

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// Open the wallet generated with generate-wallet.
const main = async () => {
  // create needed directory structure
  mkdirp(`${htmlDir}`, err => {})

  // Generate a random number for the first half of the serial number.
  const rnd = generateRando()
  const i = 0

  // Generate the artwork for the public address.
  await createPublic(PUBLIC_ADDR, i, rnd)

  // Generate the artwork for the private key.
  await createPrivate(PRIVATE_ADDR, i, rnd)

  console.log(chalk.green("All done."), emoji.get(":white_check_mark:"))
  console.log(emoji.get(":rocket:"), `html files written successfully.`)
}
main()

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

// Generates a 3-digit random number string.
function generateRando() {
  let rnd = Math.random()

  rnd = rnd * 1000

  rnd = Math.floor(rnd)

  const str = `000${rnd}`

  return str.slice(-3)
}
