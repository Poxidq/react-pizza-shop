import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import setPizzas from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
    // eslint-disable-next-line
  }, []);

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
