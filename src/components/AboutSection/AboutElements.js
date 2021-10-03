import styled from "styled-components"

export const AboutContainer = styled.div`
    background: #363755;
    display: flex;
    justify-content: space-between;
    //align-items: center;
    padding: 4rem 24px;
    width: 100%;
    position: relative;
    z-index: 1;
    border-top: 1px solid;

    @media screen and (max-width: 768px) {
        display: block;
    }
`
export const AboutTextContainer = styled.div`
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

export const AboutH1 = styled.h1`
    color: #fff;
    font-size: 32px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 500;
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

export const ThinSpan = styled.span`
    font-weight: 400;
`

export const AboutBody = styled.p`
    font-weight: 400;
    font-size: 24px;
    position: relative;
    z-index: 99;

    @media screen and (max-width: 768px) {
        padding-bottom: 10rem;
    }
`

export const AboutImageContainer = styled.div`
    width: 40%;
    height: auto;
    margin-right: 5%;
    //margin-top: 8rem;
    //margin-bottom: 8rem;
    z-index: 98;
    align-items: center;
    justify-content: center;
    display: block;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const AboutImage = styled.img`
    position: relative;
    top: 2%;
    width: 96%;
    height: 96%;
    display: block;
    margin: auto auto;
    z-index: 99;
`

export const AboutImageContainerM = styled.div`
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

export const AboutImageM = styled.img`
    border-radius: 5000px;
    position: relative;
    top: 2%;
    width: 96%;
    height: 96%;
    display: block;
    margin: auto auto;
    z-index: 99;
`

export const MobileAbout = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`