import styled from "styled-components"

export const SkillsContainer = styled.div`
    background: #96e5fd;
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

export const SkillsTextContainer = styled.div`
    width: 90%;
    margin: 0 5%;
    z-index: 99;
    position: relative;
    display: block;
    color: #282948;
`

export const SkillsH1 = styled.h1`
    color: #282948;
    font-size: 32px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: 300;
    font-size: 48px;
    z-index: 99;
    width: 100%;
    text-align: center;
`

export const SkillsImageContainer = styled.div``

export const SkillsImage = styled.img``

export const SkillTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 5%;
    padding-top: 2rem;
    justify-content: space-evenly;
`

export const SkillTag = styled.div`
    display: flex;
    color: #282948;
    font-weight: 400;
    border-radius: 10px;
    border-width: 1px;
    border-style: solid;
    padding: 5px 15px;
    margin: 10px;
    background: linear-gradient(to right, #c0c5fc, #75dafb);
`