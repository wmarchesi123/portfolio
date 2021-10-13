import styled from "styled-components";

export const PortfolioContainer = styled.div`
    background: #282948;
    display: block;
    justify-content: space-between;
    padding: 4rem 24px;
    width: 100%;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 1080px) {
        display: block;
        padding: 4rem 0;
    }
`

export const PortfolioH1 = styled.h1`
    color: #fff;
    font-size: 32px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 300;
    font-size: 48px;
    z-index: 99;
    width: 100%;
    text-align: center;
`

export const PortfolioBody = styled.div`
    width: auto;
    margin: 0 5%;
    height: auto;
    background: transparent;
    display: block;
    justify-content: space-between;

    @media screen and (max-width: 1080px) {
        margin: 0 auto;
    }
`

export const PortfolioElement = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1080px) {
        padding-bottom: 0;
        margin: 0;
    }
`

export const PortfolioElementBody = styled.div`
    width: 50%;
    background: #b6f0ff;
    border-radius: 2rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;  
    height: min-content; 

    @media screen and (max-width: 1080px) {
        width: 100%;
    }
`
export const PortfolioElementP = styled.p`
    padding-bottom: 1rem;
    font-size: 18px;
    font-weight: 300;

    @media screen and (max-width: 1080px) {
        font-size: 16px;
    }
`

export const PortfolioElementImage = styled.img`
    margin: 0 auto;
    position: relative;
    max-height: 1000px;
    max-width: 40%;
    height: auto;
    object-fit: cover;
    border: solid 2px;
    border-radius: 2rem;

    @media screen and (max-width: 1080px) {
        display: none;
    }
`
export const PortfolioElementImageM = styled.img`
    max-width: 90%;
    max-height: 400px;
    margin: 1rem auto;
    position: relative;
    display: none;
    object-fit: cover;
    border: solid 2px;
    border-radius: 2rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 1080px) {
        display: block;
    }
`

export const PortfolioElementH1 = styled.h1`
    color: #282948;
    font-size: 30px;
    text-align: center;
    font-weight: 400;
`

export const PortfolioElementGoButton = styled.a`
    //margin-top: 5rem;
    align-items: center;
    text-align: center;
    width: 45%;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #282948;
    text-decoration: none;
    border: solid 2px;
    border-color: #282948;
    color: white;
    font-size: 32px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
 
    &:visited {
        color: #fff;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #282948;
        background-color: transparent;
    }

    @media screen and (max-width: 1080px) {
        display: block;
        width: 100%;
        margin-bottom: 1rem;
        font-size: 24px;
    }
`

export const SpanGap = styled.br`
    height: 2rem;

    @media screen and (max-width: 1080px) {
        display: none;
        height: 0 rem;
    }
`