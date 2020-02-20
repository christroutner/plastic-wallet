/*
  Generate a CSV file showing which of the tips have been claimed and which
  ones haven't.
*/

"use strict"

const BITBOXSDK = require("bitbox-sdk")
const BITBOX = new BITBOXSDK()
const converter = require("json-2-csv")
const fs = require("fs")
const addresses = []
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// Open the wallet generated with generate-wallet.
const main = async () => {
  const wfn = `motherShipWallet.json`
  const filename = `${__dirname}/../output/wallets/${wfn}`

  let mnemonicObj
  try {
    mnemonicObj = require(filename)
  } catch (err) {
    console.log(
      `Could not open goldenTicketWallet.json. Generate a mnemonic with generate-wallet first.
      Exiting.`
    )
    process.exit(0)
  }

  const addressCount = mnemonicObj.mothership.children

  // root seed buffer
  const rootSeed = BITBOX.Mnemonic.toSeed(mnemonicObj.mnemonic)

  // master HDNode
  const masterHDNode = BITBOX.HDNode.fromSeed(rootSeed)

  // HDNode of BIP44 account
  const bip44 = BITBOX.HDNode.derivePath(masterHDNode, `m/44'/145'`)
  for (let i = 0; i < addressCount; i++) {
    // Sleep a little more than 1 second so the program doesn't trip the
    // freemium rate limits for rest.bitcoin.com.
    await sleep(1100)

    // derive the ith external change address HDNode
    const node = BITBOX.HDNode.derivePath(bip44, `0'/0/${i}`)

    // get the cash address
    const cashAddress = BITBOX.HDNode.toCashAddress(node)
    const details = await BITBOX.Address.details(cashAddress)
    //console.log(`details: ${JSON.stringify(details, null, 2)}`)

    const wif = BITBOX.HDNode.toWIF(node)

    const claimed = details.balance === 0

    const obj = {
      cashAddress: cashAddress,
      wif: wif,
      claimed: claimed
    }

    if (claimed) obj.BCHvalue = 0
    else obj.BCHvalue = details.balance

    addresses.push(obj)
    console.log(i, cashAddress, wif, obj.BCHvalue, obj.claimed)
  }
  converter.json2csv(addresses, json2csvCallback)
}
main()

function json2csvCallback(err, csv) {
  if (err) throw err
  fs.writeFile(`${__dirname}/../output/csv/check-addresses.csv`, csv, err => {
    if (err) return console.error(err)
    console.log(`check-addresses.csv written successfully.`)
  })
}
