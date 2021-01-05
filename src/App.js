import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/home/Home"
import NavBar from "./Components/NavBar/NavBar"
import {Switch, Route} from "react-router-dom"
import PageNotFound from "./Components/PageNotFound/PageNotFound"
import ProductList from "./Components/Products/ProductList"
import Details from "./Components/Details/Details";
import Carts from "./Components/Cart/Carts";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/carts" component={Carts} />
        <PageNotFound component={PageNotFound}  />
      </Switch>
    </div>
  );
}

export default App;
