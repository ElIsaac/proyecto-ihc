import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";
import Stock from "./components/Admin/Stock";
import Users from "./components/Admin/Users";
import Sales from "./components/Vendor/Sales";
import Inventory from "./components/Vendor/Inventory";
import Appointments from "./components/Client/Appointments";

function App() {
  return (
    <Router>
      <Switch>
        {/* Rutas para el administrador */}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/productos">
          <Products />
        </Route>
        <Route path="/stock">
          <Stock />
        </Route>
        <Route path="/usuarios">
          <Users />
        </Route>

        {/* Rutas para el vendedor */}
        <Route path="/ventas">
          <Sales />
        </Route>
        <Route path="/inventario">
          <Inventory />
        </Route>

        {/* Rutas para el cliente */}
        <Route path="/citas">
          <Appointments />
        </Route>

        {/* Ruta predeterminada */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

