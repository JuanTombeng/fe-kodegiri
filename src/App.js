import React, { Fragment } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Halaman1 from "./pages/halaman1";
import Login from "./pages/login";

const App = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/halaman1" element={<Halaman1 />} />
              <Route path="/halamanLogin" element={<Login />} />
              
          </Routes>
      </BrowserRouter>
    )
}

export default App