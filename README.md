## Tip BCH
This a node.js app that generates Bitcoin Cash tips.

![Tip Example](images/example300.jpg)

The tips are generated as a series of PDF files, which can be printed out and
physically handed out. Recievers can scan the QR code with a BCH wallet to claim
the tip.

Users of this app can run a script to reclaim any unused funds, so that tips
aren't wasted.

This repository is forked from
[Bitcoin.com Golden Ticket](https://github.com/Bitcoin-com/golden-ticket)

## Installation

[Step-by-step Video Instructions on YouTube](https://youtu.be/qFGjQ277h_A)

Install [NodeJS](http://nodejs.org/) LTS version 8.x or greater.

Clone the repo

`git clone https://github.com/christroutner/tip-bch`

Install the dependencies

`cd tip-bch && npm install`

## Usage

A typical workflow is

- `npm run generate-wallet` to create the 'mothership' address. This will generate
a BCH address and QR code on the terminal that you then fund. This will prompt
you for the number of children wallets to create.

- `npm run create-addresses` will generate a series of HTML and PDF files for
each child address.

- `npm run create-csv` is a handy way to create a list of the addresses that you
just funded.

- `npm run show-mother` show the mothership address and QR code.

- `npm run fund-addresses` will fund each child by evenly distributing the BCH
funded to the mothership address.

- `npm run check-addresses` generate a CSV file listing each tip address and
weather or not they have been claimed (or not).

- `npm run reclaim-funds` reclaim any unspent tips by sending them to an address
of your choosing.

## Multiple Sessions
It may be necessary to create tips for multiple events or sessions at once. After
you created and funded the tips, create a `.zip` backup of the `output` directory.
You can then restore the `output` directory and everything you need to make the
commands work will be in-place. Swapping out different copies of the `output`
directory will allow you to work with multiple sets of mothership and children
wallets.
