import React, { useEffect, useState } from 'react'
import './employee.css'
import './addemployee.css'


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

  const [login, setLogIn] = useState("");
  const [id, setId] = useState("");

  const handleAddEmployee = (e) => {
    e.preventDefault();
    let employee = {
      login,
      id
    };
    setData([...data, employee]);
    setLogIn("");
    setId("")
  };


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
    <div className='container d-flex'>
  <div className='container'>
    <div>
        <h4 className='tittel'>Employees List</h4>
    </div>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item,id)=>(
          <tr key={id}>
            <th scope="row"> {item.id} </th>
            <td>{item.login}</td>
            <td>edit</td>
            <td> <button className='btn btn-primary'
            onClick={()=>deleteEmployeeList(item.id)}>Delete</button> </td>
          </tr>
            ))
          }
        </tbody>
    </table>
  </div>

  <div className="container box">
        <h4>Add Employees List</h4>
        <form onSubmit={handleAddEmployee}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
             Name
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleInputName"
              aria-describedby="NameHelp"
              onChange={(e) => setLogIn(e.target.value)}
              value={login}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              ID
            </label>
            <input
              type="Id"
              className="form-control"
              id="exampleInputId"
              aria-describedby="IdHelp"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
  </div>
  )
}

export default Employees
