/*
  This file encodes the html template for the golden ticket.
*/

"use strict"

const htmlTemplate = function(config) {
  const { pubAddr, pubQR, wifQR, wif } = config

  return `
  <body style="padding: 0; margin: 0;">
    <div style="border: 0px solid black; width: 1120px; height: 640px; padding: 5px;">
      <p style="font-family: Monaco, monospace; font-size: 44; margin: 0px; margin-bottom: 5px;">
        ${pubAddr}
      </h3>

      <table>
        <tr>
          <td style="">
            <img src='${pubQR}' />
          </td>

          <td style="width: 200px;">
          </td>

          <td style="">
            <img src='${wifQR}' />
          </td>
        </tr>
      </table>

      <p style="font-family: Lucida Console, monospace; font-size: 64; margin: 0px; margin-bottom: 5px;">
        ${wif.slice(0, 26)}<br />
        ${wif.slice(-26)}
      </p>
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
