import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

export default function App() {

  const UlStyling = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Router>
      <nav>
        <UlStyling>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </UlStyling>
      </nav>
      <Switch>
        <Route exact path='/'>
          <WelcomePage />
        </Route>

        <Route path='/characters'>
          <Header />
          <CharacterList />
        </Route>
      </Switch>
    </Router>
  );
}
