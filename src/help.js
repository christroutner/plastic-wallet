/*
  Shows the help for new users.
*/

function help () {
  console.log(`
This is a program for making paper wallets. Available commands:

npm start: Show this help file.

For generating individual paper wallets:
npm run bch - Make 10 individual BCH paper wallets.
npm run slp - Make 10 individual SLP token paper wallets.
npm run btc - Make 10 individual BTC paper wallets.
npm run eth - Make 10 individual ETH paper wallets.
npm run xec - Make 10 individual XEC paper wallets.

For generating a grid of paper wallets for bulk processing with a laser engraver:
npm run bch:bulk - Generate a 3x5 grid of BCH wallets
npm run btc:bulk - Generate a 3x5 grid of BTC wallets
npmn run eth:bulk - Generate a 3x5 grid of ETH wallets


Each command assumes that you've opened it and customized the variables at the
top of the file.

Also check out the /manual directory for creating a custom artwork. This can be
used to generate custom wallets, like for ETH or AVAX.
`)
}
help()
