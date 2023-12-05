import React, { useState, useEffect } from "react";
import "./App.css";

const Home = (props) => {
  return (
    <div className="App">
      This is my Home Page
      <div>Hello:{props.userEmail}</div>
    </div>
  );
};

export default Home;
