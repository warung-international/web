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
                    <Link href="https://warunginternational.eu.org">
                        <a><Home /> Home</a>
                    </Link> 
                    <Divider />
                    <Link href="/">
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