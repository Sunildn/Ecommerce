import React from "react";

const Header = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
    <div class="navbar-brand" onCLick= {()=>{
      console.log("sdsudbn")
      alert("my name is sunbil")
    }}>Ecommerce</div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse " id="navbarTogglerDemo02" style= {{justifyContent:"space-between"}}>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>

      <form class="form-inline d-flex">
      <input class="form-control mr-sm-2 " type="search" placeholder="Search"/>
      <button class="btn btn-outline-danger mx-2 my-2 my-sm-0" type="submit">Search</button>
    </form>

    
    </div>
  </nav>
  )
};

export default Header;
