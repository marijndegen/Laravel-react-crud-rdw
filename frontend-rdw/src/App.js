import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar";

import EditCar from "./Pages/EditCar";
import ListCars from "./Pages/ListCars";
import NewCar from "./Pages/NewCar";
import ViewCar from "./Pages/ViewCar";

class App extends Component {
  render = () => {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Select an action</h1>} />
          <Route path="/edit" element={<EditCar />} />
          <Route path="/list" element={<ListCars />} />
          <Route path="/new" element={<NewCar />} />
          <Route path="/view/:carId" element={<ViewCar />} />
          <Route path="*" element={<h1>Not  found</h1>} />
        </Routes>
      </Router >

    );
  }
}

export default App;
