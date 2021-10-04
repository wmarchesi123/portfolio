import React from 'react'
import { FooterColumn, FooterContainer, FooterRibbonLinkOut, FooterRibbon, StampLogo, FooterLinkOut, FooterDetail, FooterLinkS, FooterLinkR, FooterSpacer, DownloadIcon, LinkedInIcon, GitHubIcon, TwitterIcon } from './FooterElements'

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
                    <FooterLinkS to="home" offset={-80} smooth={true} duration={1000}>Home</FooterLinkS>
                    <FooterLinkS to="about" offset={-80} smooth={true} duration={1000}>About</FooterLinkS>
                    <FooterLinkS to="skills" offset={-80} smooth={true} duration={1000}>Skills</FooterLinkS>
                    <FooterLinkS to="portfolio" offset={-80} smooth={true} duration={1000}>Portfolio</FooterLinkS>
                    <FooterLinkOut target="_blank" href="/rvutrackdownload">RVU Track Beta (iOS)</FooterLinkOut>
                    {/* <FooterLinkR to="/personalsite">Personal Website</FooterLinkR> */}
                    <FooterLinkS to="experience" offset={-80} smooth={true} duration={1000}>Experience</FooterLinkS>
                    <FooterLinkS to="contact" offset={-80} smooth={true} duration={1000}>Contact</FooterLinkS>
                </FooterColumn>

                <FooterColumn>
                    <FooterSpacer />
                    <FooterLinkOut target="_blank" href="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/WilliamMarchesi_Resume.pdf?alt=media&token=a14cab67-1352-4a32-a564-62da3d403a54">
                        <DownloadIcon />
                        Resume PDF Download
                    </FooterLinkOut>
                    <FooterLinkOut target="_blank" href="https://www.linkedin.com/in/williammarchesi/">
                        <LinkedInIcon />
                        LinkedIn
                        </FooterLinkOut>
                    <FooterLinkOut target="_blank" href="https://github.com/wmarchesi123">
                        <GitHubIcon />
                        GitHub
                        </FooterLinkOut>
                    <FooterLinkOut target="_blank" href="https://twitter.com/williammarchesi">
                        <TwitterIcon />
                        Twitter
                        </FooterLinkOut>
                </FooterColumn>
            </FooterContainer>
            <FooterRibbon>
                Site by William Marchesi | © 2021 | <FooterRibbonLinkOut target="_blank" href="https://github.com/wmarchesi123/portfolio">GitHub Repo</FooterRibbonLinkOut>
            </FooterRibbon>
        </>
    )
}

export default Footer
