import React from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogoLink,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    OpenIcon
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogoLink href="/">
                        <NavLogo draggable="false" onmousedown="return false" src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/TightNegativeLogo.png?alt=media&token=fe929503-223b-42b6-8bc4-78ec65cabbea" alt="William Marchesi Logo"></NavLogo>
                    </NavLogoLink>
                    <MobileIcon onClick={ toggle }>
                        <OpenIcon />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio">Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resume">Resume</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/contact">Contact</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
