import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand-md navbar-light fixed-top bg-dark">
    //   <NavLink className="h4 text-decoration-none logo-text" to="/home">FinBank</NavLink>
    //   <a className="navbar-brand" href="#">
    //     <span style="color:red">Comfy</span> Shop
    //   </a>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarCollapse"
    //     aria-controls="navbarCollapse"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarCollapse">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item">
    //         <a className="nav-link" href="allProducts.html">
    //           Products
    //         </a>
    //       </li>
    //     </ul>
    //     <div className="form-inline">
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item">
    //           <a className="nav-link" href="/views/test/cart.html">
    //             Cart
    //           </a>
    //         </li>
    //       </ul>
    //       <a className="btn btn-danger" href="login.html">
    //         Logout
    //       </a>
    //     </div>
    //   </div>
    // </nav>

    // <nav className="container my-4 position-absolute top-0 start-0 end-0">
    <nav className="navbar navbar-expand fixed-top bg-dark">
      <div className="d-flex justify-content-between w-100">
        <div className="links-account d-flex justify-content-between my-auto">
          <div className="logo px-4 mx-4">
            <NavLink className="h4 logo-text navbar-brand " to="/home">ComfyBank</NavLink>
          </div>
          <div className="links my-auto">
            <NavLink className={({isActive})=> "me-3 me-md-5 text-decoration-none "+ (isActive? "active-link":"")  } to="/home">Home</NavLink>
            <NavLink className={({isActive})=> "me-3 me-md-5 text-decoration-none "+ (isActive? "active-link":"")  } to="/customers">Customers</NavLink>
          </div>
        </div>
          <div className="links my-auto">
            <NavLink className={({isActive})=> "me-3 me-md-5 text-decoration-none "+ (isActive? "active-link":"")  } to="/login">Login</NavLink>
            <NavLink className={({isActive})=> "me-3 me-md-5 text-decoration-none "+ (isActive? "active-link":"")  } to="/register">Register</NavLink>
          </div>
      </div>
    </nav>
  );
}
