"use strict"

const BITBOXSDK = require("bitbox-sdk")
const BITBOX = new BITBOXSDK()

const converter = require("json-2-csv")
const fs = require("fs")
const emoji = require("node-emoji")
const chalk = require("chalk")
const addresses = []

// Open the wallet generated with generate-wallet.
const main = async () => {
  let mnemonicObj
  try {
    mnemonicObj = require(`${__dirname}/../output/wallets/motherShipWallet.json`)
  } catch (err) {
    console.log(
      `Could not open motherShipWallet.json. Generate a wallet with generate-wallet first.
      Exiting.`
    )
    process.exit(0)
  }
  //console.log(`mnemonicObj: ${JSON.stringify(mnemonicObj, null, 2)}`)

  const addressCount = mnemonicObj.mothership.children
  //console.log(`addressCount: ${addressCount}`)

  // root seed buffer
  const rootSeed = BITBOX.Mnemonic.toSeed(mnemonicObj.mnemonic)

  // master HDNode
  const masterHDNode = BITBOX.HDNode.fromSeed(rootSeed)

  // BIP44
  const bip44 = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'")

  for (let i = 0; i < addressCount; i++) {
    const node = BITBOX.HDNode.derivePath(bip44, `0'/0/${i}`)

    // get the cash address
    const cashAddress = BITBOX.HDNode.toCashAddress(node)

    // get the priv key in wallet import format
    const wif = BITBOX.HDNode.toWIF(node)

    const obj = {
      cashAddress: cashAddress,
      wif: wif,
      claimed: false
    }

    if (i <= 199) obj.value = 0.005
    else if (i >= 200 && i <= 349) obj.value = 0.006
    else if (i >= 350 && i <= 399) obj.value = 0.02

    //console.log(`obj: ${JSON.stringify(obj, null, 2)}`)

    addresses.push(obj)
    console.log(i, cashAddress, wif, obj.value, obj.claimed)
  }

  // Write the output to the CSV file.
  converter.json2csv(addresses, json2csvCallback)
}
main()

// This function writes the data to a CSV file.
function json2csvCallback(err, csv) {
  if (err) throw err
  fs.writeFile(`${__dirname}/../output/csv/bch-tips.csv`, csv, err => {
    if (err) return console.error(err)

    console.log(chalk.green("All done."), emoji.get(":white_check_mark:"))
    console.log(emoji.get(":rocket:"), `bch-tips.csv written successfully.`)
  })
}
