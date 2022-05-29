/*  ./components/Navbar.jsx     */
import Link from 'next/link';

export const Navbar = () => {
  return (
    <>
        <div className="nav">
            <Link href="https://warunginternational.eu.org">
                <a>Home</a>
            </Link>
            <Link href="/">
                <a>Leaderboards</a>
            </Link>
            <Link href="https://docs.warunginternational.eu.org">
                <a>Documentations</a>
            </Link>
        </div>
        <img
          id="title"
          src="../wi-logo.png"
          alt="WI Logo"
        ></img>
    </>
  );
};