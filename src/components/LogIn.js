import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LogIn() {

  const employeeDetails = useNavigate();

  const [logDetails, setLogDetails] = useState([])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    const getuserlog = localStorage.getItem('signup');
    if(getuserlog && getuserlog.length){
      const userdata = JSON.parse(getuserlog)
      const userlogin = userdata.filter((e,k)=>{
        return e.email === email && e.password === password
      });
      if(userlogin.length === 0){
        alert('invalid details')
      }else{
          employeeDetails('/employee')
      }
    }

    let loginuser = {
        email,
        password
    };
    setLogDetails([...logDetails, loginuser]);
    setEmail("");
    setPassword("");
    
  };



  return (
    <div className="container box">
        <h4>Log In</h4>
    <form onSubmit={handleLogIn} >
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            <div id="emailHelp" className="form-text">write your valid email</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="current-password" className="form-control" id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>    
  )
}

export default LogIn
