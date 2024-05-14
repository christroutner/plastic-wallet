/*
  This file encodes the html template for the golden ticket.
*/

'use strict'

const htmlTemplate = function (config) {
  const { wifQR, wif, i, rnd } = config

  return `
  <!DOCTYPE html>
  <!-- This template is used to create a wood frame to hold blank cards -->
  <!-- 6.2px per mm -->
  <!-- expected screen display: 1920 x 1080 -->
  <!-- expected wood frame size: 300mm (1860px) x 200mm (1240px) -->
  <!-- Biz Card dimensions: 86mm (533px) x 54mm (335px) -->
  <html lang="en">
    <head>
  	<meta charset="UTF-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<meta http-equiv="X-UA-Compatible" content="ie=edge">
  	<link rel="stylesheet" href="./style.css">
  	<link rel="icon" href="./favicon.ico" type="image/x-icon">
    </head>
    <body style="padding: 0; margin: 0;">
      <div style="border: 1px solid black; width: 1860px; height: 1240px;  padding: 5px; margin-left: 50px;">
        <table>
          <tr>
            <td>

              <div style="border: 1px solid black; width: 533px; height: 335px; margin: 25px;">

                <table>
                  <tr>
                    <td style="">
                      <img src='${wifQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: Monaco, monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        <u>Private Key</u><br />
                        ${wif.slice(0, 12)}<br />
                        ${wif.slice(12, 24)}<br />
                        ${wif.slice(24, 36)}<br />
                        ${wif.slice(36, 48)}<br />
                        ${wif.slice(48, 52)}<br />
                        SN# ${generateSN(rnd, i)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: Monaco, monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
            <td>
              <div style="width: 533px; height: 335px; border: 1px solid black; background: #000; margin: 25px;"></div>
            </td>
          </tr>
        </table>
      </div>
  	  <script src="index.js"></script>
    </body>
  </html>
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
