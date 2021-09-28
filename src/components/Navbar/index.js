import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav,NavbarContainer, NavLogoLink, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogoLink to="/">
                        <NavLogo src="https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/LOGOBTIGHT.png?alt=media&token=f905ba6f-998e-4b57-a103-f8761ca0f186" alt="William Marchesi Logo"></NavLogo>
                    </NavLogoLink>
                    <MobileIcon>
                        <FaBars color="#000"/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
