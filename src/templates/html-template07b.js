/*
  ETH bulk paper wallet template.
*/

// Border thickness is pixels.
const BORDER_THICKNESS = 0

const htmlTemplate = function (config = {}) {
  const { privDatas } = config

  if (privDatas.length !== 9) {
    throw new Error('privDatas must be an array with 9 elements.')
  }

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
      <div style="border: 1px solid black; width: 1860px; height: 1240px;  padding: 5px;">
        <table>
          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[0].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[0].wif.slice(0, 12)}<br />
                        ${privDatas[0].wif.slice(12, 24)}<br />
                        ${privDatas[0].wif.slice(24, 36)}<br />
                        ${privDatas[0].wif.slice(36, 48)}<br />
                        ${privDatas[0].wif.slice(48, 60)}<br />
                        ${privDatas[0].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[0].rnd, 0)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[1].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[1].wif.slice(0, 12)}<br />
                        ${privDatas[1].wif.slice(12, 24)}<br />
                        ${privDatas[1].wif.slice(24, 36)}<br />
                        ${privDatas[1].wif.slice(36, 48)}<br />
                        ${privDatas[1].wif.slice(48, 60)}<br />
                        ${privDatas[1].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[1].rnd, 1)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[2].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[2].wif.slice(0, 12)}<br />
                        ${privDatas[2].wif.slice(12, 24)}<br />
                        ${privDatas[2].wif.slice(24, 36)}<br />
                        ${privDatas[2].wif.slice(36, 48)}<br />
                        ${privDatas[2].wif.slice(48, 60)}<br />
                        ${privDatas[2].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[2].rnd, 2)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
          </tr>
          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[3].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[3].wif.slice(0, 12)}<br />
                        ${privDatas[3].wif.slice(12, 24)}<br />
                        ${privDatas[3].wif.slice(24, 36)}<br />
                        ${privDatas[3].wif.slice(36, 48)}<br />
                        ${privDatas[3].wif.slice(48, 60)}<br />
                        ${privDatas[3].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[3].rnd, 3)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[4].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[4].wif.slice(0, 12)}<br />
                        ${privDatas[4].wif.slice(12, 24)}<br />
                        ${privDatas[4].wif.slice(24, 36)}<br />
                        ${privDatas[4].wif.slice(36, 48)}<br />
                        ${privDatas[4].wif.slice(48, 60)}<br />
                        ${privDatas[4].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[4].rnd, 4)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[5].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[5].wif.slice(0, 12)}<br />
                        ${privDatas[5].wif.slice(12, 24)}<br />
                        ${privDatas[5].wif.slice(24, 36)}<br />
                        ${privDatas[5].wif.slice(36, 48)}<br />
                        ${privDatas[5].wif.slice(48, 60)}<br />
                        ${privDatas[5].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[5].rnd, 5)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
          </tr>
          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[6].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[6].wif.slice(0, 12)}<br />
                        ${privDatas[6].wif.slice(12, 24)}<br />
                        ${privDatas[6].wif.slice(24, 36)}<br />
                        ${privDatas[6].wif.slice(36, 48)}<br />
                        ${privDatas[6].wif.slice(48, 60)}<br />
                        ${privDatas[6].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[6].rnd, 6)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[7].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[7].wif.slice(0, 12)}<br />
                        ${privDatas[7].wif.slice(12, 24)}<br />
                        ${privDatas[7].wif.slice(24, 36)}<br />
                        ${privDatas[7].wif.slice(36, 48)}<br />
                        ${privDatas[7].wif.slice(48, 60)}<br />
                        ${privDatas[7].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[7].rnd, 7)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${privDatas[8].privQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Private Key<br />
                        ${privDatas[8].wif.slice(0, 12)}<br />
                        ${privDatas[8].wif.slice(12, 24)}<br />
                        ${privDatas[8].wif.slice(24, 36)}<br />
                        ${privDatas[8].wif.slice(36, 48)}<br />
                        ${privDatas[8].wif.slice(48, 60)}<br />
                        ${privDatas[8].wif.slice(60, 72)}<br />
                        SN# ${generateSN(privDatas[8].rnd, 8)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Keep this PRIVATE. No pictures.
                  </b>
                </center></p>
              </div>

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
