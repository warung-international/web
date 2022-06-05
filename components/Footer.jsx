/*  ./components/Footer.jsx     */
import Link from 'next/link';

export const Footer = () => {
  return (
    <>
        <footer className="text-center text-muted footer-white">
        <br />
        <a href="https://simpleanalytics.com/warunginternational.eu.org?utm_source=warunginternational.eu.org&utm_content=badge" referrerPolicy="origin" target="_blank" rel="noreferrer"><img src="https://simpleanalyticsbadges.com/warunginternational.eu.org?mode=dark" loading="lazy" crossOrigin="anonymous" /></a>
        <br />
        Created with ❤️ by <Link href="https://mcley.me">mclemie</Link>
        <br /><br />
      </footer>
    </>
  );
};