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
        <meta name="author" content="clemiee" />
        <meta property="og:image" content="../wi-logo.png" />
        </Head>
        <Script src="https://analytics.warunginternational.eu.org/latest.js"></Script>
        <Script src="../assets/js/discord.js"></Script>
        <Script src="../assets/js/jquery.easing.min.js"></Script>
        <Script src="../assets/js/script.js"></Script>
        <Script src="../assets/js/scrolling-nav.js"></Script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"></Script>
    </>
  );
};