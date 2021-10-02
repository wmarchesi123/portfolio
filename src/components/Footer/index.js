import React from 'react'
import { FooterColumn, FooterContainer, FooterLinkOut, FooterRibbon } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterColumn />
                <FooterColumn />
                <FooterColumn />
            </FooterContainer>
            <FooterRibbon>
                Site by William Marchesi | C 2021 | <FooterLinkOut href="">GitHub Repo</FooterLinkOut>
            </FooterRibbon>
        </>
    )
}

export default Footer
