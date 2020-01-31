import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`

  * {
    font-weight: normal;
    margin:0;
    padding:0;
    list-style:none;
    text-decoration: none;
    border:none;
  }
  body{
    ::-webkit-scrollbar {
        width: 8px;
        }
        ::-webkit-scrollbar-track {
        background: rgba(10,10,10);
        }
        ::-webkit-scrollbar-thumb {
        background: darkgrey;
        }
        ::-webkit-scrollbar-thumb:hover {
        background: darkgray;
        }
  }

  `

export default GlobalStyle;