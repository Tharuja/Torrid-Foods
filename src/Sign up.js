import React, { Component } from 'react';



class Signup extends Component {


    
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
      fname:"",
      lname:"",
      mobile:""
    };

  }



           signup(e){
        e.preventDefault();
     
    
        const user ={
          email:this.state.email,
          password:this.state.password,
          fname:this.state.fname,
          lname:this.state.lname,
          mobile:this.state.mobile
        
      
        }
       console.log(user)
        fetch('https://torrid-app.herokuapp.com/users/addAdmin',{
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify(user)
        })
        .then(function(response){ 
         // return response.json();
         if (response.status === 200) {
          console.log("ok");
          console.log(response.json());
        //  response.json().then(function(user) { console.log(user.type) });
          window.alert('Signed up successfully..!')
    
      } else if (response.status === 400) 
        {
          console.log("damn");
          window.alert('Email Exist..Use another email..!')
      }   
     else if (response.status === 500) 
        {
          console.log("damn");
          window.alert('Sign up failed...Please fill all correctly !')
      }  
      
         })
         .catch(function() {
          console.log('error handling');
          window.alert("something is going wrong..!!")
      });    
       }

  render() {
    return (
        <div>
             <br/><br/><br/><br/><br/>
            <div class="row" >
     <div class="col-md-4"></div>
     <div class="col-md-4">
         
<form class="text-center border border-light p-5">

    <p class="h4 mb-4">Register Here</p>

    <div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample"/>
  <label class="custom-control-label" for="defaultInline1">Customer</label>
</div>


<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample"/>
  <label class="custom-control-label" for="defaultInline2">Admin</label>
</div>

    <div class="form-row mb-4">
        <div class="col">

            <input type="text" id="defaultRegisterFormFirstName" class="form-control" onChange={event => this.setState({fname: event.target.value})} placeholder="Firstname"/>
        </div>
    </div>

    <div class="form-row mb-4">

        <div class="col">
        
            <input type="text" id="defaultRegisterFormLastName" class="form-control" onChange={event => this.setState({mobile: event.target.value})} placeholder="Mobile"/>
        </div>
    </div>

    <div class="form-row mb-4">

<div class="col">

    <input type="text" id="defaultRegisterFormLastName" class="form-control" onChange={event => this.setState({lname: event.target.value})} placeholder="Lastname"/>
</div>
</div>

    
    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" onChange={event => this.setState({email: event.target.value})} placeholder="E-mail"/>

    
    <input type="password" id="defaultRegisterFormPassword" class="form-control"onChange={event => this.setState({password: event.target.value})}  placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>

    <input type="password" id="defaultRegisterFormPassword" class="form-control"  placeholder="Confirm password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
    
    
    <button class="btn btn-unique my-4 btn-block"  onClick={this.signup.bind(this)} type="submit">Sign up</button>


</form>
<hr/>
</div>
</div>






      </div>
    );
  }
}

export default Signup;
