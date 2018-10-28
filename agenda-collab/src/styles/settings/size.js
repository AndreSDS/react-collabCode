import { createGlobalStyle } from 'styled-components';

const GlobalSize = createGlobalStyle`
  :root{
      --small: 10px;
      --medium: 20px;
      --large: 40px;
      --radius: 4px;
  }
`;

export default GlobalSize;