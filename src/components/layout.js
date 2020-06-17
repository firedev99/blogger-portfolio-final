import React, { useState } from 'react'
import PropTypes from "prop-types"
//themeproviders
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../ThemeProvider/theme'
import { GlobalStyles } from '../ThemeProvider/global'
//custom hook for themeprovider
import { useDarkMode } from '../ThemeProvider/useDarkMode'
//components
import Toggle from './Toggle'
import Navigation from './Navigation'
import MenuTab from './MenuTab'

const Layout = ({ children }) => {
  
  //toggle theme
  const [ theme, toggleTheme, componentMounted ] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  //toggle Menu
  const [toggleMenu, setToggleMenu] = useState(false) 

  if(!componentMounted) {
    return <div />
  }
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <MenuTab toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
