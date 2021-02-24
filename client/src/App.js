import React from 'react';
import Nav from "./components/Nav";
import { Container } from './components/Grid';
import Jumbotron from './components/Jumbotron';
import Search from './pages/Search';
// import Saved from './pages/Saved';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Container>
          <Jumbotron />
          <Switch>

            <Route exact path="/">
              <Search />
            </Route>

            {/* <Route exact path="/saved">
            <Saved />
          </Route> */}

          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;

