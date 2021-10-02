import styled, {keyframes} from "styled-components";
import { FaChevronDown } from 'react-icons/fa'

export const HeroContainer = styled.div`
    background: #c0c5fc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    min-height: 400px;
    width: 100%;
    position: relative;
    z-index: 1;
    margin-top: 80px;

    @media screen and (max-width: 768px) {
        display: block;
    }
`
export const HeroTextContainer = styled.div`
    width: 50%;
    margin-left: 5%;
    z-index: 99;
    position: relative;
    display: block;
    color: #282948;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HeroH1 = styled.h1`
    color: #282948;
    font-size: 32px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 700;
    font-size: 48px;
    position: relative;
    z-index: 99;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        padding-top: 2rem;
        width: 100%;
        display: block;
        text-align: center;
    }
`

export const LinkOut = styled.a`
    border-bottom: 2px dotted;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:visited {
        color: inherit;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #6d71f9;
    }

    
`

export const ThinSpan = styled.span`
    font-weight: 400;
`

export const HeroBody = styled.p`
    font-weight: 400;
    font-size: 24px;
    position: relative;
    z-index: 99;

    @media screen and (max-width: 768px) {
        padding-bottom: 10rem;
    }
`

export const HeroImageContainer = styled.div`
    border-radius: 5000px;
    background: #6d71f9;
    width: 350px;
    height: 350px;
    margin-right: 5%;
    margin-top: 8rem;
    margin-bottom: 8rem;
    z-index: 98;
    align-items: center;
    justify-content: center;
    display: block;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const HeroImage = styled.img`
    border-radius: 5000px;
    position: relative;
    top: 2%;
    width: 96%;
    height: 96%;
    display: block;
    margin: auto auto;
    z-index: 99;
`

export const HeroImageContainerM = styled.div`
    border-radius: 5000px;
    background: #6d71f9;
    width: 250px;
    height: 250px;
    z-index: 98;
    align-items: center;
    justify-content: center;
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        margin: 0 auto;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`

export const HeroImageM = styled.img`
    border-radius: 5000px;
    position: relative;
    top: 2%;
    width: 96%;
    height: 96%;
    display: block;
    margin: auto auto;
    z-index: 99;
`

export const HeroBL = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    height: 50%;

    @media screen and (max-width: 768px) {
        aspect-ratio: 1 / 1;
        height: auto;
        width: 35%;
    }
`

export const HeroTR = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    height: 50%;

    @media screen and (max-width: 768px) {
        aspect-ratio: 1 / 1;
        height: auto;
        width: 35%;
    }
`

export const MobileHero = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`

const bounceAnimation = keyframes`
    0%       { bottom:0px; }
    25%, 75% { bottom:4px; }
    50%      { bottom:8px; }
    100%     { bottom:0; }
`

export const HeroDown = styled(FaChevronDown)`
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-top: -20px;
    margin-left: -20px;
    height: 40px;
    width: 40px;
    color: #282948;
    z-index: 100;
    
    animation-name: ${bounceAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;

    @media screen and (max-width: 768px) {
        margin-bottom: 4rem;
    }
`