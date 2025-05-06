import React from 'react'
import { Link, Outlet} from 'react-router-dom'

function Employees() {
  return (
    <>
    <h2 style={{marginLeft: "70px"}}>Employees</h2>
    <hr />
    <div className="header">
      <Link to="managers">Managers</Link>
      <Link to="teamLeaders">TeamLeaders</Link>
      <Link to="developers">Developers</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Employees