import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home />} exact />
        {/* Если нужно что-либо передавать в компонент, то мы вызываем "render={() => {}}" */}
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
