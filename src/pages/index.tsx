import Head from 'next/head';
import React from 'react';
import { GetServerSideProps } from 'next';
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from "../components/ExperienceBar";
import Profile from '../components/Profile';
import { CountdownProvider } from '../hooks/CountdownContext';
import { ChallengesProvider } from '../hooks/ChallengesContext';

import styles from '../styles/pages/Home.module.css';

export default function Home(props) {

  console.log({props});

  return (
    <ChallengesProvider>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props: {
      level,
      currentExperience,
      challengesCompleted,
    }
  }
}