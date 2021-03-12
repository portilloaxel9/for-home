import React, { Component } from "react";
import '../scss/navbar.scss';
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                <a href="#" class="navbar-brand">For<br/>Home</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="#" class="nav-item nav-link active">Home</a>
                        <a href="#" class="nav-item nav-link">About</a>
                        <a href="#" class="nav-item nav-link">Products</a>
                    </div>
                    <form class="form-inline ml-auto">
                        <input type="text" class="form-control mr-sm-2" placeholder="Search " />
                        <button type="submit" class="btn btn-outline-light">Search</button>
                    </form>
                </div>
            </nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;