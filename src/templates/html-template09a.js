/*
  BCH & BTC bulk paper wallet template.
*/

// Border thickness is pixels.
const BORDER_THICKNESS = 0

const htmlTemplate = function (config = {}) {
  const { pubDatas } = config

  // if (pubDatas.length !== 15) {
  //   throw new Error('pubDatas must be an array with 9 elements.')
  // }

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
      <div style="border: 1px solid black; width: 1860px; height: 1950px; padding: 5px;">
        <table>
          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
          </tr>

          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
          </tr>

          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
          </tr>

          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
          </tr>

          <tr>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 35px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
            <td>

              <div style="border: ${BORDER_THICKNESS}px solid black; width: 533px; height: 335px; margin: 25px; margin-left: 60px;">
                <table style="width: 100%;">
                  <tr>
                    <td style="text-align: center">
                      <h1>Chris Troutner</h1>
                    </td>
                  </tr>

                  <tr>
                    <td style="text-align: center">
                      <h2 style="margin: 0px;">Bitcoin Cash & JavaScript Developer</h2>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <ul>
                        <li>
                          <h3 style="margin: 5px;">Web: MasteringBCH.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">Email: chris.troutner@gmail.com</h3>
                        </li>

                        <li>
                          <h3 style="margin: 5px;">X & Telegram: @christroutner</h3>
                        </li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <span style="padding-left: 150px;">
                        <img src="../../src/templates/javascript.jpg" style="width: 60px;" />
                      </span>
                      <span style="padding-left: 100px;">
                        <img src="../../src/templates/bitcoin-cash-circle.jpg" style="width: 60px;" />
                      </span>
                    </td>
                  </tr>

                </table>
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
