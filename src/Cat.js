import React, { Component } from 'react';



class Cat extends Component {

  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
            <div class="row" >
     <div class="col-md-4"></div>
     <div class="col-md-4">
         
     <div class="card-title badge badge-success text-wrap" style={{width:"20rem"}}><h3 >Explore from Categories</h3></div>
     <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
  <button type="button" class="btn btn-outline-secondary waves-effect ml-0"><a href="/items" >Dairy Products</a></button>
  <button type="button" class="btn btn-outline-default waves-effect btn-lg"><a href="/items" >Snacks and Biscuit Products</a></button>
  <button type="button" class="btn btn-outline-secondary waves-effect btn-lg"><a href="/items" >Jam and Savory</a></button>
  <button type="button" class="btn btn-outline-default waves-effect btn-lg"><a href="/items" >Dried Pasta, Noodles</a></button>
  <button type="button" class="btn btn-outline-secondary waves-effect btn-lg"><a href="/items" >Beveraged/Drinks</a></button>
  <button type="button" class="btn btn-outline-default waves-effect btn-lg"><a href="/items" >Cerials</a></button>
</div>

<hr/>
</div>
</div>




      </div>
    );
  }
}

export default Cat;
