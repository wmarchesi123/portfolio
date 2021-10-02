import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const FooterContainer = styled.div`
    width: 100%;
    min-height: 100px;
    background: #515370;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 768px) {
        grid-gap: 0rem;
        grid-template-columns: repeat(1, 1fr);
        padding: 1rem 0;
    }
`

export const FooterColumn = styled.div`
    background-color: #515370;
    color: white;
    padding: 1rem;
    height: 100%;
    display: block;

    @media screen and (max-width: 768px) {
        padding: 0;
        height: min-content;
        text-align: center;
    }
`

export const StampLogo = styled.img`
    aspect-ratio: 1 / 1;
    width: 33%;
    display: block;
    margin-bottom: 0.1rem;

    @media screen and (max-width: 768px) {
        width: 16%;
        margin: 0 auto;
        margin-bottom: 0.1rem;
    }
`

export const FooterDetail = styled.p`
    color: white;
    display: block;
    font-weight: 300;
    font-size: 12px;
`

export const FooterLinkOut = styled.a`
    color: white;
    font-size: 12px;
    border-bottom: 1px dotted;
    width: max-content;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: block;
    margin-bottom: 1rem;

    &:visited {
        color: inherit;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #55ccf9;
    }

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-bottom: 0.5rem;
    }
`

export const FooterLinkR = styled(LinkR)`
    color: white;
    font-size: 12px;
    border-bottom: 1px dotted;
    width: max-content;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: block;
    margin-bottom: 1rem;

    &:visited {
        color: inherit;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #55ccf9;
    }

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-bottom: 0.5rem;
    }
`

export const FooterLinkS = styled(LinkS)`
    color: white;
    font-size: 12px;
    border-bottom: 1px dotted;
    width: max-content;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: block;
    margin-bottom: 1rem;

    &:visited {
        color: inherit;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #55ccf9;
    }

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        margin-bottom: 0.5rem;
    }
`

export const FooterRibbon = styled.div`
    display: flex;
    color: #fff;
    background: #282948;
    height: 2rem;
    width: 100%;
    font-size: 12px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 300;
`

export const FooterRibbonLinkOut = styled.a`
    color: white;
    margin-left: 5px;

    border-bottom: 1px dotted;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:visited {
        color: inherit;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #55ccf9;
    }
`
export const FooterSpacer = styled.div`
    display: none;
    height: 1rem;

    @media screen and (max-width: 768px) {
        display: block;
    }
`