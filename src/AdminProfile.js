import React, { Component } from 'react';



class AdminProfile extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
            <div class="row" >
     <div class="col-md-4"></div>
     <div class="col-md-4">

<h1>Edit My Profile</h1><br/>


  <a href="#!" class="list-group-item list-group-item-action btn-secondary">Add new Category </a> <br/>
  <a href="#!" class="list-group-item list-group-item-action btn-dark">Remove Category</a>  <br/>
  <a href="/additem" class="list-group-item list-group-item-action btn-secondary">Add new products</a> <br/>
   <a href="#!" class="list-group-item list-group-item-action btn-dark">Remove Item</a> <br/>
  <a href="#!" class="list-group-item list-group-item-action disabled btn-success">Check availability and Performance</a>  <br/>



<hr/>
</div>
</div>




      </div>
    );
  }
}

export default AdminProfile;
