/*  ./components/Footer.jsx     */
import Head from 'next/head'
import Script from 'next/script'

export const Heading = () => {
  return (
    <>
        <Head>
        <meta charSet="utf-8" />
        <title>Warung International - Discord Leaderboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Warung International - Discord Leaderboard" />
        <meta name="description" content="Warung International hanya menjual Soto Ayam terbaik di tata surya dan sudah teruji klinis di lab ITB dan IPB." />
        <meta name="keywords" content="warung, international, warung international, aku ganteng, leaderboards" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="mclemie" />
        <meta property="og:image" content="../wi-logo.png" />
        </Head>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js"></Script>
    </>
  );
};