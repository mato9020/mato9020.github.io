import { ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomeNavbar from './components/nav/HomeNavbar';
import About from './components/pages/About';
import MainPage from './components/pages/Main';
import { ContextProvider } from './services/context';
import { theme } from './services/Theme'


function App() {

  const [auth, setAuth] = useState(false);


  console.log(`value of ${auth}`);

  return (

    <div className="App">
      <ThemeProvider theme={theme}>
      <ContextProvider auth={auth}>

        <div>
          <Router>
            
            <HomeNavbar />
            
            <Switch>
              <Route exact path="/">
                <MainPage/>
              </Route>
              <Route path="/about">
                <About />
              </Route> 
            </Switch>


          </Router>
        </div>
      </ContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
