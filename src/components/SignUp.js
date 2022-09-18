import { useState, useEffect } from "react";
import React from 'react'


const getUserData = () => {
    const users = localStorage.getItem("signup");
    if (users) {
      return JSON.parse(users);
    } else {
      return [];
    }
  };

function SignUp() {

    const [details, setDetails] = useState(getUserData())

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    let user = {
        name,
        email,
        password
    };
    setDetails([...details, user]);
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(()=>{
    localStorage.setItem("signup", JSON.stringify(details));
  },[details]);



  return (
    <div className="container box">
        <h4>Sign Up</h4>
    <form  onSubmit={handleSignUp} >
        <div className="mb-3">
            <label for="exampleInputName" className="form-label">Your Name</label>
            <input type="Name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
            onChange={(e) => setName(e.target.value)}
            value={name}/>
            <div id="nameHelp" className="form-text">write your vaild name</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            <div id="emailHelp" className="form-text">write your vaild email address </div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
  )
}

export default SignUp
