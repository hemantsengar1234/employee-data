import React, { useEffect, useState } from 'react'
import './employee.css'


const getDataApi = () => {
  const list = localStorage.getItem("employee");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Employees = () => {
  const [data, setData] = useState(getDataApi())


   useEffect(() =>{
     fetch("https://api.github.com/users").then((result) =>{
       result.json().then((res) =>{
         setData(res)
       })
   })
   },[])
  

  useEffect(()=>{
    localStorage.setItem("employee", JSON.stringify(data));
  },[data]);

  const deleteEmployeeList=(id)=>{
    const filteredEmployees=data.filter((element,index)=>{
      return element.id !== id
    })
    setData(filteredEmployees);
  }


  return (
  <div className='container'>
    <div>
        <h4 className='tittel'>Employees List</h4>
    </div>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,id)=>(
          <tr key={id}>
            <th scope="row"> {item.id} </th>
            <td>{item.login}</td>
            <td> <button className='btn btn-primary'
            onClick={()=>deleteEmployeeList(item.id)}>Delete</button> </td>
          </tr>
            ))
          }
        </tbody>
    </table>
  </div>
  )
}

export default Employees
