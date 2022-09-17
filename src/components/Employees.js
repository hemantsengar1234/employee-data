import React, { useEffect, useState } from 'react'
import './employee.css'

const Employees = () => {
  const [data, setData] = useState([])


  useEffect(() =>{
    fetch("https://api.github.com/users").then((result) =>{
      result.json().then((res) =>{
        setData(res)
      })
  })
  },[])
  

  useEffect(()=>{
    localStorage.setItem("employee", JSON.stringify(data));
  },[data])


  return (
  <div className='container'>
    <div>
        <h4 className='tittel'>Employees List</h4>
    </div>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,id)=>(
          <tr key={id}>
            <th scope="row"> {item.id} </th>
            <td>{item.login}</td>
            <td>{item.login}</td>
            <td> <button className='btn btn-primary'>Delete</button> </td>
          </tr>
            ))
          }
        </tbody>
    </table>
  </div>
  )
}

export default Employees
