import React from 'react'

import { HomeContactWrapper, HomeLinksWrapper, HomeEmailWrapper } from '../../styles/homeContactsStyles'


const HomeContacts = () => {
    return (
        <HomeContactWrapper>
            <h1>CONCTACT</h1>
            <HomeLinksWrapper>
                <div className="label">SOCIAL</div>
                <div className="links">
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tripyy_land/">YOUTUBE</a>
                    <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tripyy_land/">INSTRAGRAM</a>
                    <a href="tel:+880-173-359-437-9">TELEGRAM</a>
                    <a rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100001959401487/">FACEBOOK</a>
                </div>
            </HomeLinksWrapper>
            <HomeEmailWrapper>
                <div className="email_label">EMAIL</div>
                <div className="email">
                    <a href="mailto:firethedev@gmail.com">
                        HEROSHI<br />@GMAIL.COM
                    </a>
                </div>
            </HomeEmailWrapper>
        </HomeContactWrapper>
    )
}

export default HomeContacts
