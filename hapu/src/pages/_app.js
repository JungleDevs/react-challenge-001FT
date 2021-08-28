import {AppProps} from 'next/app';

//styles
import{ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
