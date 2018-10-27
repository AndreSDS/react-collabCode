import styled from "styled-components";

import { center } from "../../styles/tools";

const Card = styled.article`
background-color: var(--color-first);
color: var(--color-zero);
text-align: center;
padding: 58px 0 40px 0;
width: 370px;
border-radius: var(--radius);
${center};
`;

export default Card;