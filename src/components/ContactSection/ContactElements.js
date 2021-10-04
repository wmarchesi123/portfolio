import styled from "styled-components";

export const ContactContainer = styled.div`
    background: #c0c5fc;
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

export const ContactH1 = styled.h1`
    color: #282948;
    font-size: 32px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 300;
    font-size: 48px;
    z-index: 99;
    width: 100%;
    text-align: center;
`

export const LinkContainer = styled.div`
    margin-top: 2rem;
    padding: 0 5%;
    width: 100%;
    justify-content: space-between;
    display: flex;

    @media screen and (max-width: 768px) {
        display: block;
    }
`

export const Link = styled.a`
    align-items: center;
    text-align: center;
    width: 45%;
    padding: 1.5rem;
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

    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        margin-bottom: 1rem;
    }
`