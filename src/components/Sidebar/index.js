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
                    <SidebarLink to="home">
                        Home
                    </SidebarLink>
                    <SidebarLink to="portfolio">
                        Portfolio
                    </SidebarLink>
                    <SidebarLink to="resume">
                        Resume
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">
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
