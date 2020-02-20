/*
  This script shows the mothership wallet QR code used to fund the children.
  This is handy in case the user needs to send additional funds to the
  mothership address.
*/

"use strict"

const qrcode = require("qrcode-terminal")
const chalk = require("chalk")
const emoji = require("node-emoji")

const wfn = `motherShipWallet.json`
const filename = `${__dirname}/../output/wallets/${wfn}`

let mnemonicObj
try {
  mnemonicObj = require(filename)
} catch (err) {
  console.log(
    `Could not open mnemonic.json. Generate a mnemonic with generate-wallet first.
      Exiting.`
  )
  process.exit(0)
}

// show funder address qr code
console.log(`Send funds to: ${mnemonicObj.mothership.address}`)
qrcode.generate(mnemonicObj.mothership.address, { small: true })
console.log(chalk.green("All done."), emoji.get(":white_check_mark:"))
