import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #282948;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #55cff9;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: trasnparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;    
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    color: #55cff9;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    height: min-content;
    margin: auto 0;
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;

    &:hover {
        color: #fff;
        transition: 0.2 ease-in-out;
    }
`

export const SidebarLinkR = styled(LinkR)`
color: #55cff9;
font-size: 1.5rem;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
height: min-content;
margin: auto 0;
align-items: center;
display: flex;
justify-content: center;
list-style: none;

&:hover {
    color: #fff;
    transition: 0.2 ease-in-out;
}
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 5px;
    background: #55cff9;
    whitespace: nowrap;
    padding: 1rem 3rem;
    color: #282948;
    font-size: 1.5rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: #282948;
        background: #fff;
        transition: 0.2 ease-in-out;
    }
`

export const BottomLogoContainer = styled.div`
    position: absolute;    
    width: 100%;
    height: min-content;
    align-items: center;
    justify-content: center;
    bottom: 1rem;
`

export const BottomLogo = styled.img`
    display: block;
    width: 60%;
    max-width: 300px;
    margin: 0 auto;
    user-drag: none;
`