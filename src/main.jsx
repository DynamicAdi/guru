import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./universal.scss";
import ErrorPage from "./global/error/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/index.jsx";
import Corporate from "./components/corporate/index.jsx";
import { ArrayProvider } from "./funcs/context.jsx";
import Admin from "./components/admin/index.jsx";
import Login from "./components/admin/New.jsx";
import ViewAllItems from "./components/corporate/viewAll.jsx";
import Checkout from "./components/checkout/index.jsx";
import Items from "./components/admin/Items.jsx";
import Form from "./components/forms/form.jsx";

const URL = import.meta.env.VITE_BACKEND_URL;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ArrayProvider>
        <Routes>
          <Route errorElement={<ErrorPage />} path="/" element={<App />} />
          <Route path="/menu" element={<Menu backend={URL} />} errorElement={<ErrorPage />} />
          <Route path="/checkout" element={<Checkout backend={URL} />} errorElement={<ErrorPage />} />
          <Route
            path="/corporate"
            element={<Corporate />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/corporate/items"
            element={<ViewAllItems />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/dashboard"
            element={<Admin backend={URL} />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/addCorporate"
            element={<Form backend={URL} />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/admin/login"
            element={<Login backend={URL} />}
            errorElement={<ErrorPage />}
          />
            <Route
            path="/dashboard/items"
            element={<Items />}
            errorElement={<ErrorPage />}
          />
          {/* <Route
            path="/menu/:category"
            element={<Menu />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/dashboard"
            element={<Admin />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/edit"
            element={<Update />}
            errorElement={<ErrorPage />}
          />


          <Route
            path="/admin/login"
            element={<Login />}
            errorElement={<ErrorPage />}
          /> */}
        </Routes>
      </ArrayProvider>
    </BrowserRouter>
  </StrictMode>
);
