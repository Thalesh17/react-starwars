import React from "react";
import Filter from "../Filter";
import "./styles.css";
// import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="container">
      <img
        width={100}
        src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
      />
      <div className="content">
        <Filter />
      </div>
    </div>
  );
};

export default Header;
