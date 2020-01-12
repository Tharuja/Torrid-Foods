import React, { Component } from 'react';



class LoginAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password:"",
    };

  }


  login(e){
    e.preventDefault();

    const user ={
         
     email:this.state.email,
     password:this.state.password
   }
   e.preventDefault();
   fetch("https://torrid-app.herokuapp.com/users/loginadmin",{
     method:"POST",
     headers: {
       "Content-Type": "application/json"
     },
     body:JSON.stringify(user)
   })
   .then(res => res.json()).then(data =>{
     if(data.success){
       window.alert('Login successfull!')
           
     }else{
       console.log("damn");
       window.alert('Login Failed!')
     }
   })
  
   .catch(function() {
       console.log('error handling');
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

    <p class="h4 mb-4">Login Here as an Admin</p>

  
        <div class="md-form mb-5">
          <label data-error="wrong" data-success="right" for="defaultForm-email">Your email</label> <br/>
          <input type="email" id="defaultForm-email" onChange={event => this.setState({email: event.target.value})} class="form-control validate"/>

        </div>

        <div class="md-form mb-4">
          <label data-error="wrong" data-success="right" for="defaultForm-pass"> Your password</label> <br/>
          <input type="password" id="defaultForm-pass" onChange={event => this.setState({password: event.target.value})} class="form-control validate"/>
        </div>

    
    
    <button class="btn btn-unique my-4 btn-block"  onClick={this.login.bind(this)}   type="submit">Login</button>
 <br/>
 <p>
        <a href="/#">Cant remember password..??</a>
    </p>
    <p>Not a member?
        <a href="/signup">Register</a>
    </p>


</form>
<hr/>
</div>
</div>




      </div>
    );
  }
}

export default LoginAdmin;
