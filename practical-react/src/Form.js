import React from 'react';

export default class Form extends React.Component{
  state = {
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    address:"",

  };
  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  

  

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      address:"",

    });
    this.props.onChange({
      firstName:"",
      lastName:"",
      username:"",
      email:"",
      password:"",
      address:"",

    });
  };
  render(){
    return(
      <form>
        <input
        name="firstName"
        placeholder="first Name"
        value={this.state.firstName}
        onChange={e => this.change(e)}
        />
     <br />
     <input
        name="lastName"
        placeholder="last Name"
        value={this.state.lastName}
        onChange={e => this.change(e)}
     />
     <br />
     <input
        name="username"
        placeholder="UserName"
        value={this.state.userame}
        onChange={e => this.change(e)}
     />
     <br />
     <input
        name="email"
        placeholder="email"
        value={this.state.email}
        onChange={e => this.change(e)}
    />
    <br />
    <input
        name="password"
        placeholder="Password"
        value={this.state.password}
        onChange={e => this.change(e)}
    />
    <br />
     <input
        name="address"
        placeholder="Address"
        value={this.state.address}
        onChange={e => this.change(e)}
     />
<br />
<button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }

}
