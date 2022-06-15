import { GeistProvider, CssBaseline} from '@geist-ui/core'
import React, { useState } from 'react'
import "inter-ui/inter.css"
import '../styles/style.css'
import '../styles/animate.min.css'

const App = ({ Component, pageProps }) => {
  const [themeType, setThemeType] = useState('dark')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
        <Component {...pageProps} />
    </GeistProvider>
  )
}

export default App