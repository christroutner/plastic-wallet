/*
  This file encodes the html template for the golden ticket.
*/

"use strict"

const htmlTemplate = function(config) {
  const { pubAddr, pubQR, i, rnd } = config

  return `
  <body style="padding: 0; margin: 0;">
    <div style="border: 1px solid black; width: 800px; height: 800px; padding: 5px; margin-left: 50px;">
      <center>
        <img src='${pubQR}' style="padding: 50px;" />
        <br /><br />
        <p style="font-family: Monaco, monospace; font-size: 24; margin: 0px; margin-bottom: 5px;">
          ${pubAddr}
        </p>
      </center>
    </div>
  </body>
`
}

function generateSN(rnd, i) {
  let outStr = "000"

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
