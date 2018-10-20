import React from "react";

import { Card, Name, Price, Description, Button } from "./style";

const App = () => ( 
        <Card>
          <Name>Curso React!</Name>
          <Price>$25</Price>
          <Description>Professional features for your business to grow!</Description>
          <Button>Learn more...</Button>
        </Card>
    );

export default App;