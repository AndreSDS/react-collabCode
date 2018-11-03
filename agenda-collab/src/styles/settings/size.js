<<<<<<< HEAD
import { createGlobalStyle} from 'styled-components';

const GlobalSize = createGlobalStyle`
    :root{
        --radius: 4px;
    }
=======
import { createGlobalStyle } from 'styled-components';

const GlobalSize = createGlobalStyle`
  :root{
      --small: 10px;
      --medium: 20px;
      --large: 40px;
      --radius: 4px;
  }
>>>>>>> a82ac93fc5716996bb4c5985ebde21d0e6f796ff
`;

export default GlobalSize;