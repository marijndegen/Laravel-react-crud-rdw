import React, { Component } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar";

import EditCar from "./Pages/NewEditCar";
import ListCars from "./Pages/ListCars";
import NewCar from "./Pages/NewCar";
import ViewCar from "./Pages/ViewCar";
import NewEditCar from "./Pages/NewEditCar";

class App extends Component {
  render = () => {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <h1>Select an action</h1>
              <Link to="/new" className="flex">
                new
              </Link>
              <Link to="/edit/20" className="flex">
                edit
              </Link>
            </>
          } />
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
