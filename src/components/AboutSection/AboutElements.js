import styled from "styled-components"

export const AboutContainer = styled.div`
    background: #363755;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 24px;
    width: 100%;
    position: relative;
    z-index: 1;
    border-top: 1px solid;

    @media screen and (max-width: 768px) {
        display: block;
        padding: 0rem 24px;
    }
`
export const AboutTextContainer = styled.div`
    width: 45%;
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
    font-weight: 300;
    font-size: 48px;
    position: relative;
    z-index: 99;

    @media screen and (max-width: 768px) {
        margin: 0 auto;
        padding-top: 4rem;
        width: 100%;
        display: block;
        text-align: center;
    }
`

export const ThinSpan = styled.span`
    font-weight: 400;
`

export const AboutBody = styled.div`
    color: #fff;
    font-size: 16px;
    position: relative;
    z-index: 99;

    @media screen and (max-width: 768px) {
        padding-bottom: 4rem;
    }
`

export const AboutP = styled.p`
    font-weight: 300;
    padding: 1rem 0;
`

export const AboutImageContainer = styled.div`
    width: 40%;
    height: 100%;
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
    width: 100%;
    height: auto;
    display: block;
    margin: auto auto;
    z-index: 99;
`

export const AboutImageContainerM = styled.div`
    width: 250px;
    height: auto;
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
    width: 200px;
    height: auto;
    position: relative;
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