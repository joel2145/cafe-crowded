import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import { ListPage } from "./pages/ListPage";
import { MapPage } from "./pages/MapPage";
import { SignUpPage } from "./pages/SignUpPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/sign_up" element={<SignUpPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/list" element={<ListPage />}></Route>
          <Route exact path="/map" element={<MapPage />}></Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
