import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Route exact path='/'>
        <WelcomePage />
      </Route>

      <Route path='/characters'>
        <Header />
        <CharacterList />
      </Route>
    </main>
  );
}
