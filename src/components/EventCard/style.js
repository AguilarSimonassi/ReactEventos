import styled, { css } from "styled-components"

const Card = styled.div`
    width: 25rem;
    /* height sumiu */
    border: 1px solid gray;
    border-radius: 10px;
    box-shadow: 0 0 5px gray;
    background-color: ${({ dataJaPassou }) => dataJaPassou ? "red" : "white"};
    transition: 0.2;

    ${
        ({ dataJaPassou }) => dataJaPassou && css`
        color: white;
        `  
    }

    img {
        width: 100%;
        height: 50%; /* de 60% para 50% */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`