import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
 import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: lightgrey;
    height: 80px;
    //margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
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
    max-width: 1100px;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
        padding: 0 12px
    }
`

export const NavLogoLink = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    //cursor: pointer;
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
    max-width: 400px;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
        max-width: 300px
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

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
        display: none;
    }
`
export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`