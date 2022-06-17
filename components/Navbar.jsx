/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import React from 'react'
import { Button } from "@geist-ui/core";

export const Navbar = () => {
  return (
    <>
        <div className="nav">
        <Link href="/">
            <a className="nav__logo__wrapper">
            <img
                className='nav__logo'
                src="../wi-logo.png"
                alt="WI Logo"
                ></img>
            </a>
        </Link>
        <div className="nav__lhs">

        <a 
            className="nav_link black-link"
            target="_blank"
            rel='noreferrer'
            href="/"
        >Home</a>

        <Link href="/discord-leaderboard">
            <a className="nav_link black-link">Discord Leaderboard</a>
        </Link>

        <a 
            className="nav_link black-link" 
            target="_blank"
            rel='noreferrer'
            href="https://docs.warunginternational.eu.org/"
        >Documentations</a>
        <Link
            className="nav_link black-link"
            href="https://github.com/warung-international/web"
        ><a className="nav_link black-link">Github</a></Link>
        </div>
        <div className="nav__rhs">
            <Link href="https://discord.gg/y4D5zbf4AQ">
                <Button auto type="success">Discord</Button>
            </Link>    
        </div>
        </div>
        <style jsx>{`
                .nav {
                    flex-wrap: wrap;
                    display: flex;
                    align-items: center;
                    background: var(--vercel-gray);
                    height: 86px;
                    overflow: hidden;
                    padding-right: 5vw;
                }

                .nav__logo__wrapper {
                    width: 9.4rem;
                    position: absolute;
                    height: 52px;
                    top: 10px;
                    left: 5vw;
                }

                .nav__logo {
                    width: 50%;
                }

                .nav__lhs {
                    flex-grow: 1;
                    display: flex;
                    align-items: center;
                    padding-left: /*2vw;*/ 14.4rem;
                    flex-wrap: wrap;
                }

                a.nav_link {
                    cursor: pointer;
                    margin-left: 5vw;
                    cursor: pointer;
                    font-weight: 500;
                    transition: 0.15s ease;
                    font-size: 1rem;
                }
                
                
                .nav_link:hover {
                    color: var(--re-gray);
                }


                @media screen and (max-width: 812px) {
                    .nav {
                        height: auto;
                    }

                    .nav__lhs {
                        padding-left: 20px;
                        padding-top: 20px;
                    }
                    .nav__link__home {
                        display: none;
                    }
                    a.nav_link {
                        font-size: .8rem;
                        margin-bottom: 10px;
                        margin-left: 0;
                        margin-right: 40px;
                    }

                    .nav__logo__wrapper {

                        position: relative;
                        width: 100%;
                        flex-grow: 1;
                        left: 0;
                        padding-left: 15px;
                    }

                    .nav__logo {
                        width: 3rem;
                    }

                    
                }
                
                @media screen and (max-width: 768px) {

                }
                
                @media screen and (max-width: 425px) {
                    .nav {
                        /*height: 50px;*/
                        border-bottom: none;
                    }
                    .nav__logo__wrapper {
                        height: auto;
                        top: 5px;
                    }

                    .nav__logo {
                        width: 5rem;
                    }

                    a.nav_link  {
                        margin-right: 20px;
                    }

                    .nav-email {
                        display: none;
                    }
                }
                
                /*
                @media screen and (max-width: 320px) {
                
                }
                */
            `}</style>
    </>
  );
};