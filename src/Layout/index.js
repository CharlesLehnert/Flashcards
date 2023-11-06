import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import DeckStudy from "../Decks/DeckStudy";
import NotFound from "./NotFound";
import Header from "./Header";
import ViewDeck from "../Decks/ViewDeck";

function Layout() {
  return (
    <div className="app-routes">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/decks/:deckId">
          <ViewDeck />
        </Route>

        <Route path="/decks/:deckId/study">
          <DeckStudy />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </div>
  );
}

export default Layout;