/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { Button, Drawer, Divider } from '@geist-ui/core'
import { Menu, Home, Display, Book, Github } from '@geist-ui/icons'
import React, { useState } from 'react'

export const Navbar = () => {
    const [state, setState] = useState(false)
  return (
    <>
        <div className="nav">
            <Button auto onClick={() => setState(true)}><Menu /></Button>
            <Drawer visible={state} onClose={() => setState(false)} placement="right" mr="10px">
                <Drawer.Subtitle>Main Menu</Drawer.Subtitle>
                <Drawer.Content>
                    <Link href="/">
                        <a><Home /> Home</a>
                    </Link> 
                    <Divider />
                    <Link href="/discord-leaderboard">
                        <a><Display /> Leaderboards</a>
                    </Link> 
                    <Divider />
                    <Link href="https://docs.warunginternational.eu.org">
                        <a><Book /> Documentations</a>
                    </Link>
                    <Divider />
                    <Link href="https://github.com/warung-international/web">
                        <a><Github /> Github</a>
                    </Link>
                    <Divider />
                    <iframe src="https://discord.com/widget?id=922523614828433419&theme=dark" width="350" height="500" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </Drawer.Content>
            </Drawer>
            
        </div>
        <img
          id="title"
          src="../wi-logo.png"
          alt="WI Logo"
        ></img>
    </>
  );
};