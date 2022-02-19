import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditCar from "./Pages/EditCar";
import ListCars from "./Pages/ListCars";
import NewCar from "./Pages/NewCar";
import ViewCar from "./Pages/ViewCar";

class App extends Component {
  render = () => {
    return (
      <Router>
        <nav>
          <Link to="/"> EditCar </Link>
          <Link to="/list"> ListCars </Link>
          <Link to="/new"> NewCar </Link>
          <Link to="/view"> ViewCar </Link>
        </nav>
        <Routes>
          <Route path="/" element={<EditCar />} />
          <Route path="/list" element={<ListCars />} />
          <Route path="/new" element={<NewCar />} />
          <Route path="/view" element={<ViewCar />} />
          <Route path="*" element={<h1>Not  found</h1>} />
        </Routes>
      </Router>

    );
  }
}

export default App;
