import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserStorage } from "./Context/UserContext";

import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Clients from "./pages/Clients/Clients";
import ClientDetails from "./pages/Clients/ClientDetails";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/Products/ProductDetails";

const routes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/clientes", component: <Clients /> },
  { path: "/clientes/adicionar", component: <ClientDetails /> },
  { path: "/clientes/detalhes/:id", component: <ClientDetails /> },
  { path: "/produtos", component: <Products /> },
  { path: "/produtos/adicionar", component: <ProductDetails /> },
  { path: "/produtos/detalhes/:id", component: <ProductDetails /> },
];

function App() {

  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Login />} />
          {routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<PrivateRoute>{item.component}</PrivateRoute>}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
