import React from 'react'
import { FooterColumn, FooterContainer, FooterRibbonLinkOut, FooterRibbon, StampLogo, FooterLinkOut, FooterDetail, FooterLinkS, FooterLinkR, FooterSpacer } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterColumn>
                    <StampLogo src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/footerStampLogo.png?alt=media&token=aeaafecb-a73d-4a98-9d60-cd5f19769876" />
                    <FooterLinkOut href="mailto:will@williammarchesi.com" alt="will@williammarchesi.com">will@williammarchesi.com</FooterLinkOut>
                    <FooterDetail>Boston, MA</FooterDetail>
                </FooterColumn>

                <FooterColumn>
                    <FooterSpacer />
                    <FooterLinkS to="home" offset={-80}>Home</FooterLinkS>
                    <FooterLinkS>Portfolio</FooterLinkS>
                    <FooterLinkR>RVU Track (iOS)</FooterLinkR>
                    <FooterLinkR>Personal Website</FooterLinkR>
                    <FooterLinkS>Resume</FooterLinkS>
                    <FooterLinkS>Contact</FooterLinkS>
                </FooterColumn>

                <FooterColumn>
                    <FooterSpacer />
                    <FooterLinkOut>LinkedIn</FooterLinkOut>
                    <FooterLinkOut>GitHub</FooterLinkOut>
                    <FooterLinkOut>Twitter</FooterLinkOut>
                </FooterColumn>
            </FooterContainer>
            <FooterRibbon>
                Site by William Marchesi | © 2021 | <FooterRibbonLinkOut target="_blank" href="https://github.com/wmarchesi123/portfolio">GitHub Repo</FooterRibbonLinkOut>
            </FooterRibbon>
        </>
    )
}

export default Footer
