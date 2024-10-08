/*
  ETH paper wallet template
*/

'use strict'

const htmlTemplate = function (config) {
  const { wifQR, wif, i, rnd } = config

  return `
  <body style="padding: 0; margin: 0;">
    <div style="border: 0px solid black; width: 1120px; height: 640px; padding: 5px; margin-left: 50px;">

      <table>
        <tr>
          <td style="">
            <img src='${wifQR}' />
          </td>

          <td style="width: 100px;">
          </td>

          <td style="">
            <p style="font-family: Monaco, monospace; font-size: 54; margin: 0px; margin-bottom: 5px;">
              <u>Private Key</u><br />
              ${wif.slice(0, 13)}<br />
              ${wif.slice(13, 26)}<br />
              ${wif.slice(26, 39)}<br />
              ${wif.slice(39, 52)}<br />
              ${wif.slice(52, 65)}<br />
              ${wif.slice(65, 78)}<br />
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
