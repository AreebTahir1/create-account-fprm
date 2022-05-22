import React from 'react';
import './form.css'
class Demoform extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        input["name"] = "";
        input["phone_number"]="";
        this.setState({input:input});
        alert("Account created")
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["name"]) {
        isValid = false;
        errors["name"] = "Please enter your name.";
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        input["name"] = "";
        input["phone_number"]="";
        this.setState({input:input});
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        input["name"] = "";
        input["phone_number"]="";
        this.setState({input:input});
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
          let input = {};
          input["email"] = "";
          input["password"] = "";
          input["confirm_password"] = "";
          input["name"] = "";
          input["phone_number"]="";
          this.setState({input:input});
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        input["name"] = "";
        input["phone_number"]="";
        this.setState({input:input});
      }
  
      if (!input["confirm_password"]) {
        isValid = false;
        errors["confirm_password"] = "Please enter your confirm password.";
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        input["name"] = "";
        input["phone_number"]="";
        this.setState({input:input});
      }
  
      if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
          
        if (input["password"] != input["confirm_password"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
          let input = {};
          input["email"] = "";
          input["password"] = "";
          input["confirm_password"] = "";
          input["name"] = "";
          input["phone_number"]="";
          this.setState({input:input});
        }
        if (!input["phone_number"]) {
          isValid = false;
          errors["phone_number"] = "Please enter your confirm password.";
          let input = {};
          input["email"] = "";
          input["password"] = "";
          input["confirm_password"] = "";
          input["name"] = "";
          input["phone_number"]="";
          this.setState({input:input});
        }
      } 
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }
     
  render() {
    return (
      <div>
        <h2> Create an Account</h2>
        <form onSubmit={this.handleSubmit} action="https://www.youtube.com" method='get'>
  
          <div class="form-group">
            <label for="email">Your email address</label><br />
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="" 
              id="email" />
  
              <div className="text-danger">{this.state.errors.email}</div>
          </div>
  
            <div class="form-group">
            <label for="password">Password</label><br />
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="" 
              id="password" />
  
              <div className="text-danger">{this.state.errors.password}</div>
          </div>
  
          <div class="form-group">
            <label for="confirm_password">Confirm Password:</label><br />
            <input 
              type="password" 
              name="confirm_password" 
              value={this.state.input.confirm_password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="" 
              id="confirm_password" />
  
              <div className="text-danger">{this.state.errors.confirm_password}</div>
          </div>
          <div class="form-group">
            <label for="name">Your full name</label><br />
            <input 
              type="text" 
              name="name" 
              value={this.state.input.name}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="" 
              id="name" />
  
              <div className="text-danger">{this.state.errors.name}</div>
          </div>
          <div class="form-group">
            <label for="phone_number">Your phone number</label><br />
            <input 
              type="text" 
              name="phone_number" 
              value={this.state.input.phone_number}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="" 
              id="phone_number" />
  
              <div className="text-danger">{this.state.errors.phone_numbers}</div>
          </div>
          <input type="checkbox" className='check_box' />
         <label for="checkbox">I read and agree terms and conditons</label><br></br>
         <input type="submit" value="Create account" className='btn-success' />
      </form>
      
            </div>
    );
  
  }
}
  
export default Demoform;