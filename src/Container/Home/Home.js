import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../Component/header";
import Login from "../Login/login";
import Register from "../Register/register";
import "./home.css";

const Home = () => {
  return (
    <Router>
      <Header />
      <div className="homecss">
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="welcome">
          <h1>Welcome to my Website</h1>
          <br /> Copyright | Algis Al Kausar
        </div>
      </div>
    );
  }
}

// export default Dashboard;
