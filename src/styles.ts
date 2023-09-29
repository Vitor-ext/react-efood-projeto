import { createGlobalStyle } from 'styled-components'

export const cores = {
  orange: '#E66767',
  white: '#fff',
  background: '#FFF8F2;',
  background2: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
