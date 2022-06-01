import { GeistProvider, CssBaseline} from '@geist-ui/core'
import React, { useState } from 'react'
import "inter-ui/inter.css"
import '../styles/style.css'
import { Heading } from '../components/Heading';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const App = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Heading />
      <div className="top-bar">
        <Navbar />
      </div>
      <div className="grid wrapper">
        <Component {...pageProps} />
      </div>
      <Footer />
    </GeistProvider>
  )
}

export default App