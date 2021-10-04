import styled from "styled-components";

export const PortfolioContainer = styled.div`
    background: #282948;
    display: block;
    justify-content: space-between;
    //align-items: center;
    padding: 4rem 24px;
    width: 100%;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px) {
        display: block;
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
`

export const PortfolioElement = styled.div`
    width: 100%;
    //height: 100%;
    border-radius: 2rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    display: flex;
`

export const PortfolioElementBody = styled.div`
    width: 60%;
    background: #b6f0ff;
    border-radius: 2rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;   
`

export const PortfolioElementImage = styled.img`
    width: 30%;
    height: auto;
    margin: 0 auto;
    position: relative;
`

export const PortfolioElementH1 = styled.h1`
    color: #282948;
    font-size: 30px;
    text-align: center;
    font-weight: 400;
`