import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Order from "./Components/Order/Order";
import MealTime from "./Components/MealTime";
import Bill from "./Components/Bill/Bill";
import ProductsContextProvider from "./Context/productsContext";
import CartContextProvider from "./Context/cartContext";

function App() {
  return (
    <Router>
      <ProductsContextProvider>
        <CartContextProvider>
          <Nav />
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/menu" component={Menu} exact />
          <Route path="/order" component={Order} exact />
          <Route path="/meal" component={MealTime} exact />
          <Route path="/bill" component={Bill} exact />
        </CartContextProvider>
      </ProductsContextProvider>
    </Router>
  );
}

export default App;
