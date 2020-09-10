import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  const [search, setSearch] = useState('');
  function searchcharacter(e) {
      e.preventDefault()
      document.location.href = `/?character=${search}`
  }

  return (
    <div className="App">
      <ReactBootStrap.Navbar bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand>
      <Link to={'/'}>
        <img alt="" src="/logo.png"
          width="80"
          height="30"
          className="d-inline-block align-top"/>
      </Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Form inline onSubmit={searchcharacter}>
        <input type="text" placeholder="Search" className="form-control mr-sm-3 col-6"  onChange={e => setSearch(e.target.value)} />
        {/* <ReactBootStrap.FormControl type="text" value={state.value} placeholder="Buscar" className="form-control mr-sm-3 col-6" /> */}
        <ReactBootStrap.Button type="submit" variant="outline-info" className="my-2 my-sm-0 ml-2 col-4">Search</ReactBootStrap.Button>
      </ReactBootStrap.Form>
    </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
