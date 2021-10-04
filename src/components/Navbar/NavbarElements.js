import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    background: #282948;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 10;
    width: 100%;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    margin: 0 5%;
    //background: ;
    transition: 0.8s all ease;

    @media screen and (max-width: 768px) {
        padding: 0 12px;
        margin: 0;
    }
`

export const NavLogoLink = styled.a`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    height: min-content;
    margin: auto 0;
`

export const NavLogo = styled.img`
    height: auto;
    max-width: 300px;
    transition: 0.8s all ease;
    user-drag: none;

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`

export const MobileIcon = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        font-size: 1.8rem;
        cursor: pointer;
        height: min-content;
        margin: auto 0;
    }
`

export const OpenIcon = styled(FaBars)`
    color: #55cff9;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    transition: 0.8s all ease;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    height: min-content;
    margin: auto 0;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #55cff9;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    transition: 0.8s all ease;
    margin-left: 1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtnLink = styled(LinkS)`
    border-radius: 10px;
    background: #55cff9;
    white-space: nowrap;
    padding: 10px 22px;
    color: #282948;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`