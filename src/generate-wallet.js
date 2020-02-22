/*
  Create an HD wallet that will be used to generate the address/key pairs used
  in the artwork.
*/

"use strict"

const BITBOXSDK = require("bitbox-sdk")
const BITBOX = new BITBOXSDK()
const fs = require("fs")
const qrcode = require("qrcode-terminal")
const emoji = require("node-emoji")
const chalk = require("chalk")
const prompt = require("prompt")
const mkdirp = require("mkdirp")

const main = async () => {
  // Create directories if they don't yet exist.
  mkdirp(`${__dirname}/../output`, err => {})
  mkdirp(`${__dirname}/../output/wallets`, err => {})

  // start the prompt to get user input
  prompt.start()

  console.log(
    `Select the language for the mnemonic. Default is english.
    Also enter the number of children wallets that will be created and funded.
    `
  )

  // ask for language, hdpath and walletFileName
  prompt.get(["language", "children"], (err, result) => {
    // Validate the children input.
    let children
    try {
      children = parseInt(result.children)
      //console.log(`children: ${children}`)

      if (isNaN(children)) throw new Error("bad data")
      if (children < 1) throw new Error("bad data")
    } catch (err) {
      console.log(`number of children needs to be a positive integer.`)
      return
    }

    // generate mnemonic based on language input. Default to english
    const mnemonic = BITBOX.Mnemonic.generate(
      128,
      BITBOX.Mnemonic.wordLists()[
        result.language ? result.language.toLowerCase() : "english"
      ]
    )
    // show the user their mnemoninc
    console.log(`Your mnemonic is: ${chalk.red(mnemonic)}`)

    // root seed buffer
    const rootSeed = BITBOX.Mnemonic.toSeed(mnemonic)

    // master HDNode
    const masterHDNode = BITBOX.HDNode.fromSeed(rootSeed)

    // set the hdpath. Default to BCH BIP44
    const mothershipHDPath = "m/44'/145'/0'/0/0"

    // HDNode of first internal change address
    console.log(`Your wallets HDPath is ${mothershipHDPath}`)

    // mnemonic, hdpath and mothership address to save in basic wallet
    const mnemonicObj = {
      mnemonic: mnemonic,
      mothership: {
        hdPath: mothershipHDPath,
        children: children
      }
    }

    // wallet file name
    const wfn = `wallet.json`

    const filename = `${__dirname}/../output/wallets/${wfn}`

    // Write out the basic wallet into a json file for other scripts  to use.
    fs.writeFile(filename, JSON.stringify(mnemonicObj, null, 2), err => {
      if (err) return console.error(err)

      console.log(chalk.green("All done."), emoji.get(":white_check_mark:"))
      console.log(emoji.get(":rocket:"), `${wfn} written successfully.`)
    })
  })
}

main()
