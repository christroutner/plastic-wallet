/*
  ETH bulk paper wallet template.
*/

// Border thickness is pixels.
const BORDER_THICKNESS = 0

const htmlTemplate = function (config = {}) {
  const { pubDatas } = config

  if (pubDatas.length !== 9) {
    throw new Error('pubDatas must be an array with 9 elements.')
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
      <div style="border: 1px solid black; width: 1860px; height: 1240px; padding: 5px;">
        <table>
          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${pubDatas[0].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[0].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[0].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[0].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[0].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[0].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[0].rnd, 0)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px;margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${pubDatas[1].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[1].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[1].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[1].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[1].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[1].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[1].rnd, 1)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px;margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${pubDatas[2].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[2].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[2].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[2].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[2].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[2].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[2].rnd, 2)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
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
                      <img src='${pubDatas[3].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[3].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[3].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[3].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[3].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[3].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[3].rnd, 3)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px;margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${pubDatas[4].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[4].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[4].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[4].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[4].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[4].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[4].rnd, 4)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px;margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${pubDatas[5].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[5].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[5].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[5].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[5].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[5].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[5].rnd, 5)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
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
                      <img src='${pubDatas[6].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[6].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[6].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[6].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[6].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[6].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[6].rnd, 6)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px;margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${pubDatas[7].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[7].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[7].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[7].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[7].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[7].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[7].rnd, 7)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
                  </b>
                </center></p>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px;margin: 25px; margin-left: 60px;">
                <table>
                  <tr>
                    <td style="">
                      <img src='${pubDatas[8].pubQR}' style="padding-left: 25px; padding-top: 25px;" />
                    </td>

                    <td style="width: 100px;">
                    </td>

                    <td style="">
                      <p style="font-family: monospace; font-size: 26px; margin: 5px; padding-top: 25px; padding-right: 25px;">
                        Public Addr<br />
                        ${pubDatas[8].pubAddr.slice(0, 13)}<br />
                        ${pubDatas[8].pubAddr.slice(13, 26)}<br />
                        ${pubDatas[8].pubAddr.slice(26, 39)}<br />
                        ${pubDatas[8].pubAddr.slice(39, 52)}<br />
                        ${pubDatas[8].pubAddr.slice(52, 65)}<br />
                        SN# ${generateSN(pubDatas[8].rnd, 8)}

                      </p>
                    </td>
                  </tr>
                </table>
                <p><center>
                  <b style="font-family: monospace; font-size: 26px;">
                    Share this to recieve payment
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