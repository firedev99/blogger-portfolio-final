 
import React, { useState } from 'react'
import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled'
import { MenuCircle } from '../styles/navigationStyles'

const MenuTab = ({toggleMenu, setToggleMenu}) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowHeader, setShouldShowHeader] = useState(false)

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrollDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowHeader(currentScrollTop > 2);
    setTimeout(() => {
      setShouldHideHeader(isScrollDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })
  
  const shadowStyle = shouldShowHeader ? 'shadow' : "";
  const hiddenStyle = shouldHideHeader ? 'hidden' : "";

  return(
      <MenuCircle onClick={() => setToggleMenu(!toggleMenu)}>
        <div className={`menu ${hiddenStyle} ${shadowStyle}`}>
            <span>MENU</span>
        </div>
      </MenuCircle>
    
  )
}

export default MenuTab 