import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import './home.css'

function Home() {
  return (
    <div className="container main" style={{}}>

    <div className='container my-3'>
        <h3 className='tittel'>For Registration  </h3>
      <SignUp/>
    </div>
    <div className='container my-3'>
        <h3 className='tittel'> Already Registered User </h3>
      <LogIn/>
    </div>
    </div>
  )
}

export default Home
