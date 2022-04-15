import React from "react";
import { Link, Route } from "wouter";

import Links from "./components/Links.js";
import Instagram from "./components/Instagram.js";
import WhatsApp from "./components/WhatsApp.js";
import Currency from "./components/Currency.js";
import Portfolio from "./components/Portfolio.js";
import Home from "./components/Home.js";
import MainPage from "./components/MainPage.js";

function App() {
  return (
    <div>
      <Route path="/">
        <MainPage />
      </Route>

      <Route path="/instagram">
        <Home />
        <Instagram />
        <Links />
      </Route>
      <Route path="/whatsapp">
        <Home />
        <WhatsApp />
        <Links />
      </Route>
      <Route path="/currency">
        <Home />
        <Currency />
        <Links />
      </Route>
      <Route path="/portfolio">
        <Home />
        <Portfolio />
        <Links />
      </Route>
    </div>
  );
}

export default App;
