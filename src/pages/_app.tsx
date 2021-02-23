// Tal como no _document o _app também envolve toda a SPA mas por cada página ele é renderizado

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
