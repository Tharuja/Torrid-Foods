import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router ,Route,Switch } from 'react-router-dom';


class FullPageIntroWithNonFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <Router>
          <header>
            <MDBNavbar color="black" fixed="top" dark expand="md">
              <MDBContainer>
                <MDBNavbarBrand href="/">
                  <h1>Torrid Foods</h1>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/order">Make Order</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/adminprofile">Admin Profile</MDBNavLink>
                    </MDBNavItem> 
                                 
                  </MDBNavbarNav>

                  <MDBNavbarNav right>

                  <MDBNavItem >
                  <form class="form-inline ml-auto">
                <div class="md-form my-0">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
               </div>
               <button href="#!" class="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
                 </form>
                  </MDBNavItem>

                 <MDBNavItem>
                      <MDBNavLink to="/loginadmin">Admin Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/login">Customer Login</MDBNavLink>
                    </MDBNavItem>

                  </MDBNavbarNav>

                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>

            </header>
        </Router>

       
      </div>
    );
  }
}

export default FullPageIntroWithNonFixedNavbar;