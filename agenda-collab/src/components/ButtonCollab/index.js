import styled from "styled-components";

const ButtonCollab = styled.a`
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
    border: 1px solid var(--color-zero);

    ${props =>
      props.primary
      ?`
      &:hover{
        background-color: var(--color-first);
       color: var(--color-zero);
        border: 1px solid var(--color-zero);
      }
      `
      :`
        color: #838383;
        background-color: #ccc;
      `
    };
  `;

export default ButtonCollab;