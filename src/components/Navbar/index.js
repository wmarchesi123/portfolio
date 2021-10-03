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
                            <NavLinks to="home" offset={-80} smooth={true} duration={1000}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" offset={-80} smooth={true} duration={1000}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio" offset={-80} smooth={true} duration={1000}>Portfolio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience" offset={-80} smooth={true} duration={1000}>Experience</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="contact" offset={-80} smooth={true} duration={1000}>Contact</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
