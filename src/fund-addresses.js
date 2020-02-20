/*
  Funds the children addresses from the mothership wallet.
*/

"use strict"

const BITBOXSDK = require("bitbox-sdk")
const BITBOX = new BITBOXSDK()

// Open the wallet generated with generate-wallet.
const main = async () => {
  try {
    const wfn = `motherShipWallet.json`
    const filename = `${__dirname}/../output/wallets/${wfn}`

    // ask for language, hdpath and walletFileName
    let mnemonicObj
    try {
      mnemonicObj = require(filename)
    } catch (err) {
      console.log(
        `Could not open ${wfn}. Generate a mnemonic with generate-wallet first.
      Exiting.`
      )
      process.exit(0)
    }
    //console.log(`mnemonicObj: ${JSON.stringify(mnemonicObj, null, 2)}`)

    const addressCount = mnemonicObj.mothership.children
    //console.log(`addressCount: ${addressCount}`)

    const rootSeed = BITBOX.Mnemonic.toSeed(mnemonicObj.mnemonic)

    const masterHDNode = BITBOX.HDNode.fromSeed(rootSeed)

    const mothership = BITBOX.HDNode.derivePath(
      masterHDNode,
      mnemonicObj.mothership.hdPath
    )

    const mothershipAddress = BITBOX.HDNode.toCashAddress(mothership)
    console.log("mothership addy", mothershipAddress)
    // return

    // HDNode of BIP44 account
    const account = BITBOX.HDNode.derivePath(masterHDNode, `m/44'/145'/0'`)

    const utxos = await BITBOX.Address.utxo(mothershipAddress)
    console.log(utxos.utxos[0])
    if (!utxos.utxos[0]) return

    const transactionBuilder = new BITBOX.TransactionBuilder()
    const originalAmount = utxos.utxos[0].satoshis
    // console.log("originalAmount", originalAmount)

    const vout = utxos.utxos[0].vout

    const txid = utxos.utxos[0].txid

    transactionBuilder.addInput(txid, vout)

    const byteCount = BITBOX.BitcoinCash.getByteCount(
      { P2PKH: 1 },
      { P2PKH: addressCount }
    )

    const sendAmount = originalAmount - byteCount

    const iterator = 0
    for (let i = iterator; i < addressCount + iterator; i++) {
      // derive the ith external change address HDNode
      const node = BITBOX.HDNode.derivePath(account, `0/${i}`)

      // get the cash address
      const cashAddress = BITBOX.HDNode.toCashAddress(node)
      // let cashAddress = "pz9dywrhv03h54xkyl7mmgs9memtjgjzycw5fcxdzn";
      const wif = BITBOX.HDNode.toWIF(node)

      console.log(i, cashAddress, wif)
      // add output w/ address and amount to send
      transactionBuilder.addOutput(
        cashAddress,
        Math.floor(sendAmount / addressCount)
      )
    }

    const keyPair = BITBOX.HDNode.toKeyPair(mothership)

    // sign w/ HDNode
    let redeemScript
    transactionBuilder.sign(
      0,
      keyPair,
      redeemScript,
      transactionBuilder.hashTypes.SIGHASH_ALL,
      originalAmount
    )

    // build tx
    const tx = transactionBuilder.build()
    // output rawhex
    const hex = tx.toHex()
    console.log("HEX: ", hex)

    // sendRawTransaction to running BCH node
    const success = await BITBOX.RawTransactions.sendRawTransaction(hex)
    console.log("Success! TXID: ", success)
  } catch (err) {
    console.error(`Error: `, err)
  }
}

main()
