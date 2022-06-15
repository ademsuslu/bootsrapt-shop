import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
