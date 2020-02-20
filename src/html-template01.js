/*
  This file encodes the html template for the golden ticket.
*/

"use strict"

const htmlTemplate = function(config) {
  const { pubAddr, pubQR, wifQR, wif } = config

  return `
  <body style="padding: 0; margin: 0;">
    <div style="border: 1px solid black; width: 1120px; height: 640px; padding: 25px;">
      <h3 style="font-family: Lucida Console, monospace; font-size: 22;">${pubAddr}</h3>

      <table>
        <tr>
          <td style="border: 1px solid black;">
            <h3>Public Address</h3>
            <img src='${pubQR}' />
          </td>
          <td style="width: 200px;">
            <center>
              <h1>Bitcoin</h1>
              <h1>Cash</h1>
              <h3>Paper Wallet</h3>
            </center>
          </td>
          <td style="border: 1px solid black;">
            <h3>Private Key</h3>
            <img src='${wifQR}' />
          </td>
        </tr>
      </table>

      <h3 style="font-family: Lucida Console, monospace; font-size: 22;">
        ${wif}
      </h3>
    </div>
  </body>
`
}

module.exports = htmlTemplate

/*
<center>
<p>Here is a tip in Bitcoin Cash!</p>
<p>Scan the QR code below with a BCH wallet to collect your tip.</p>
<img src='${wifQR}' />
<p>Need a wallet? Get one here:</p>
</center>
<ul style="padding-left: 75px;">
<li>Phone: wallet.bitcoin.com</li>
<li>Web Browser: badger.bitcoin.com</li>
</ul>
*/
