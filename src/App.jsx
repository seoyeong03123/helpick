import React from 'react';
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './routes/Main';
import Lot from './routes/LotContainer';
import Quiz from './routes/Quiz';
import Roulette from './routes/Roulette';

const GlobalStyle = createGlobalStyle`
    body{
        margin : 0;
    }
`


function App() {
  return (
    <div className="App">
      <Router>
            <GlobalStyle />
                
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/lot" component={Lot}/>
                    <Route path="/quiz" component={Quiz}/>
                    <Route path="/roulette" component={Roulette}/>
                </Switch>
                
        </Router>
    </div>
  );
}

export default App;
