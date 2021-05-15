## Plastic Wallet Maker

This a node.js app that generates 'paper' wallets for Bitcoin Cash. These kinds
of wallets are often called 'cold storage' wallets too. The artwork generated
by this software is intended to etched on
to [PVC plastic cards](https://amzn.to/3bV3cHj) with
a [laser engraver](https://amzn.to/2V9ejXj).

YouTube videos about this code:

- [Laser Engraged Plastic BCH Wallet](https://youtu.be/3qn0mmfwlBQ)
- [How to Store SLP Tokens](https://youtu.be/g7G-TZ7fW2s)

BCH and SLP tokens can be 'swept' to retrieve them from the paper wallet, by using [wallet.FullStack.cash](https://wallet.fullstack.cash).

![artwork example](images/laser-engraver-screenshot.JPG)

The artwork is generated as an HTML page that can be captured as screen-shot
images. The images can be exported to the laser engraver and etched onto the
plastic cards.

## Installation

- Install [NodeJS](http://nodejs.org/) LTS version 8.x or greater.

- Clone this repository:

`git clone https://github.com/christroutner/plastic-wallet`

- Install the dependencies:

`cd plastic-wallet && npm install`

## Usage

- `npm start` - display the latest help menu.
- `npm run bch` - generate BCH paper wallets.
- `npm run slp` - generate SLP token paper wallets.

The above scripts for generating the paper wallets have variables at the very top, that you can customize. But they should also 'just work'.

## Engraver Details

If you use [the same laser engraver I used](https://amzn.to/2V9ejXj), these are the settings that worked best for the PVC business cards:

1. Power at 35%
2. Depth at 45%

Also, the cards are glossy. I sanded them down with 80 grit sandpaper before
engraving them.
