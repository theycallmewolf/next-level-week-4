// Tal como no _document o _app também envolve toda a SPA mas por cada página ele é renderizado

import { ChallengesProvider } from '../hooks/ChallengesContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
