import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import ListCars from "./Pages/ListCars";
import ViewCar from "./Pages/ViewCar";
import NewEditCar from "./Pages/NewEditCar";

class App extends Component {
  render = () => {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Click "list cars" or "new car" in the top right menu</h1>} />
          <Route path="/edit/:carId" element={<NewEditCar />} />
          <Route path="/list" element={<ListCars />} />
          <Route path="/new" element={<NewEditCar />} />
          <Route path="/view/:carId" element={<ViewCar />} />
          <Route path="*" element={<h1>Not  found</h1>} />
        </Routes>
      </Router >
    );
  }
}

export default App;
