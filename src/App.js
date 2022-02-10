import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import { ListPage } from "./pages/ListPage";
import { MapPage } from "./pages/MapPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ListPage />}></Route>
        <Route exact path="/map" element={<MapPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
