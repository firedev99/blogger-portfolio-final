import React from 'react'
import PropTypes from "prop-types"
//themeproviders
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../ThemeProvider/theme'
import { GlobalStyles } from '../ThemeProvider/global'
//custom hook for themeprovider
import { useDarkMode } from '../ThemeProvider/useDarkMode'
//components
import Toggle from './Toggle'


const Layout = ({ children }) => {
  
  //toggle theme
  const [ theme, toggleTheme, componentMounted ] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  
  if(!componentMounted) {
    return <div />
  }
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <main>{children}</main>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
