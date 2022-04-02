import "../styles/global.css";

import { ChallengesProvider } from "../contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider level={0} currentExperience={0} challengesCompleted={0}>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
