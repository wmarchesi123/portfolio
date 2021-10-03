import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink, SidebarLinkR, SideBtnWrap, SidebarRoute, BottomLogo, BottomLogoContainer } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle} offset={-80} smooth={true} duration={1000}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle} offset={-80} smooth={true} duration={1000}>
                        About
                    </SidebarLink>
                    <SidebarLink to="portfolio" onClick={toggle} offset={-80} smooth={true} duration={1000}>
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to="experience" onClick={toggle} offset={-80} smooth={true} duration={1000}>
                        Experience
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="contact" onClick={toggle} offset={-80} smooth={true} duration={1000}>
                        Contact
                    </SidebarRoute>
                </SideBtnWrap>
                <BottomLogoContainer>
                    <BottomLogo draggable="false" onmousedown="return false" src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/TightNegativeLogo.png?alt=media&token=fe929503-223b-42b6-8bc4-78ec65cabbea" />
                </BottomLogoContainer>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
