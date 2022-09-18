import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

function Home() {
  return (
    <div className="container d-flex">

    <div className='container my-3'>
        <h3>For Resistration  </h3>
      <SignUp/>
    </div>
    <div className='container my-3'>
        <h3> For Resister User </h3>
      <LogIn/>
    </div>
    </div>
  )
}

export default Home
