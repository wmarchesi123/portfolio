import styled from "styled-components";

export const ExperienceContainer = styled.div`
    background: #b6f0ff;
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

export const ExperienceH1 = styled.h1`
    color: #282948;
    font-size: 32px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 300;
    font-size: 48px;
    z-index: 99;
    width: 100%;
    text-align: center;

    
`

export const ExperienceBody = styled.div`
    margin: 0 5%;
`

export const EmployerContainer = styled.div`
    color: #fff;
    background-color: #282948;
    border-radius: 2rem;
    padding: 1rem 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
`

export const PositionConatiner = styled.div`

`

export const EmployerHeading = styled.a`
    font-size: 36px;
    text-decoration: underline;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:visited {
        color: #fff;
    }
    
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #55cff9;
        background-color: transparent;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`
export const EmployerDates = styled.h2`
    font-size: 20px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

export const PositionTitle = styled.h2`
    margin-top: 1rem;
    font-size: 24px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

export const PositionDates = styled.h2`
    font-size: 20px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

export const DetailList = styled.ul`
    position: relative;
	list-style: none;
`

export const DetailBullet = styled.li`
    font-size: 16px;
    font-weight: 400;
    margin-left: 2rem;

    &:before {
        content: "-";
	    position: absolute;
	    left: 0;
    }
`