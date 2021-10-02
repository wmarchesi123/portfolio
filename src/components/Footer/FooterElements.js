import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    //height: 200px;
    background: red;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const FooterColumn = styled.div`
    background-color: dodgerblue;
    color: white;
    padding: 1rem;
    height: 4rem;
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

export const FooterLinkOut = styled.a`
    color: white;
`