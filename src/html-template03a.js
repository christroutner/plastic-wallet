/*
  This file encodes the html template for the golden ticket.
*/

'use strict'

const htmlTemplate = function (config) {
  const { pubAddr, pubQR, i, rnd } = config

  return `
  <body style="padding: 0; margin: 0;">
    <div style="border: 0px solid black; width: 1120px; height: 640px; padding: 5px; margin-left: 50px;">

      <table>
        <tr>
          <td style="">
            <img src='${pubQR}' />
          </td>

          <td style="width: 100px;">
          </td>

          <td style="">
            <p style="font-family: Monaco, monospace; font-size: 72; margin: 0px; margin-bottom: 5px;">
              <u>Public Addr</u><br />
              ${pubAddr.slice(0, 12)}<br />
              ${pubAddr.slice(12, 24)}<br />
              ${pubAddr.slice(24, 36)}<br />
              ${pubAddr.slice(36, 48)}<br />
              ${pubAddr.slice(48, 55)}<br />
              SN# ${generateSN(rnd, i)}

            </p>
          </td>
        </tr>
      </table>
    </div>
  </body>
`
}

function generateSN (rnd, i) {
  let outStr = '000'

  outStr = outStr + i
  outStr = outStr.slice(-3)

  outStr = rnd + outStr

  return outStr
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
