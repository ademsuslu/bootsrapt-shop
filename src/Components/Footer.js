import React from "react";
import "../App.css";
import { FiInstagram } from "react-icons/fi";
export default function Footer() {
  return (
    <div>
      <div className="bg-dark footer d-flex flex-column justify-content-center text-align-center align-items-center">
        <h6 className="text-light">Copyright © Your Website 2022</h6>
        <a className="text-white" href="https://www.instagram.com/suslu7616/">
          <FiInstagram />
        </a>
      </div>
    </div>
  );
}
