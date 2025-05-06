import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <>
    <h2 style={{marginLeft: "70px"}}>About</h2>
    <hr />
    <div className="header">
      <Link to="employees">Employees</Link>
      <Link to="company">Company</Link>
    </div>
    <Outlet/>
    </>
  );
}

export default About;
