/*
  Shows the help for new users.
*/

function help() {
  console.log(`
This is a program for making paper wallets. Available commands:

npm start: Show this help file.
npm run bch: Make BCH paper wallets.
npm run slp: Make SLP token paper wallets.

Each command assumes that you've opened it and customized the variables at the
top of the file.
`)
}
help()
