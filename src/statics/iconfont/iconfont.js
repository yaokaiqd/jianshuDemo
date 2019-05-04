import {createGlobalStyle} from 'styled-components'


export const GlobalStyle2 = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1552564528189'); /* IE9 */
    src: url('./iconfont.eot?t=1552564528189#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1552564528189') format('woff'),
    url('./iconfont.ttf?t=1552564528189') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1552564528189#iconfont') format('svg'); /* iOS 4.1- */
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`