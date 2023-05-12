import { Router, Route, Routes, Navigate } from 'react-router-dom';

import { Products } from "../components/admin/Products.js"
import { Stock } from "../components/admin/Stock.js"
import { Users } from "../components/admin/Users.js"

import { Appointments } from "../components/costumer/Appointments.js"

import { Inventory } from "../components/sales/Inventory.js"
import { NewSale } from "../components/sales/NewSale.js"

import { Home } from "../components/Home.js"

export default function App() {
	
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin">
          <Route path="productos" element={<Products />} />
          <Route path="stock" element={<Stock />} />
          <Route path="usuarios" element={<Users />} />
        </Route>

        <Route path="/vendedor">
          <Route path="ventas" element={<NewSale />} />
          <Route path="inventario" element={<Inventory />} />
        </Route>

        <Route path="/cliente">
          <Route path="citas" element={<Appointments />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

