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