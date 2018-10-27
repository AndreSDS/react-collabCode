import styled from 'styled-components';

import { center } from "./styles/tools";

export const Card = styled.article`
background-color: var(--color-first);
color: var(--color-zero);
font-family: 'Open Sans', sans-serif;
text-align: center;
padding: 58px 0 40px 0;
width: 370px;
border-radius: var(--radius);
${center};
`;

export const Name = styled.h1`
    font-size: 28px;
    text-transform: uppercase;
    margin: 0;
`

export const Price = styled.h2``;

export const Description = styled.p``;

export const Button = styled.a`
    display: inline-block;
    width: 120px;
    height: 35px;
    line-height: 35px;
    background: var(--color-zero);
    color: var(--color-first);
    border-radius: var(--radius);
    text-trasnform: uppercase;
    cursor: pointer;
    transition: all 150ms linear;
    border: 1px solid var(--color-first);

    &:hover{
        background-color: var(--color-first);
        color: var(--color-zero);
        border: 1px solid var(--color-zero);
    }
`;
