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
        font-family: 'Indie Flower', cursive;
    }
`


function App() {
  return (
    <div className="App">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower&display=swap" rel="stylesheet"></link>
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
