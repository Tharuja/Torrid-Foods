import React, { Component } from 'react';



class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
           name:"Biscuit",
           price:"Rs35/=",
           desc:"Good food",
           amount:"",
        };
    }
  

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
         <div class="row">
         <div class=" col-md-2"></div>

        <div class="card col-md-3">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"/>
          <div class="card-body"> 
            <h4 class="card-title">{this.state.name} :- {this.state.price}</h4>
            <p class="card-text">{this.state.desc}</p>
            <input class="form-control" type="number" placeholder="Amount"></input> <br/>
            <a  class="btn btn-secondary">Add to Cart</a>
            </div>
            </div>

            <div class="card col-md-3">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"/>
          <div class="card-body"> 
            <h4 class="card-title">{this.state.name} :- {this.state.price}</h4>
            <p class="card-text">{this.state.desc}</p>
            <input class="form-control" type="number" placeholder="Amount"></input> <br/>
            <a  class="btn btn-secondary">Add to Cart</a>
            </div>
            </div>

            <div class="card col-md-3">
        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="Card image cap"/>
          <div class="card-body"> 
            <h4 class="card-title">{this.state.name} :- {this.state.price}</h4>
            <p class="card-text">{this.state.desc}</p>
            <input class="form-control" type="number" placeholder="Amount"></input> <br/>
            <a  class="btn btn-secondary">Add to Cart</a>
            </div>
            </div>


       
       </div>

<br/>
       <div class="row">
     <div class="col-md-8"></div>
     <div class="col-md-4">
     <a href="/checkout" class="btn btn-indigo">Check Out</a>

    </div>
</div>
      </div>
    );
  }
}

export default Order;
