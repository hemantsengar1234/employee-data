import React, { useState } from "react";
import { useEffect } from "react";

import "./addemployee.css";

const getDataForm = () => {
  const list = localStorage.getItem("newemployee");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Update = () => {
  const [employees, steEmployees] = useState(getDataForm());

  const handleAddEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName,
      lastName,
      id
    };
    steEmployees([...employees, employee]);
    setFirstName("");
    setLastName("");
    setId("")
  };

  useEffect(() => {
    localStorage.setItem("newemployee", JSON.stringify(employees));
  }, [employees]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");

  const deleteEmployee=(id)=>{
    const filteredemployees=employees.filter((element,index)=>{
      return element.id !== id
    })
    steEmployees(filteredemployees);
  }

  return (
    <>
      <div className="container update">
        <h4>Add Employees List</h4>
        <form onSubmit={handleAddEmployee}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              type="firstname"
              className="form-control"
              id="exampleInputFirstName"
              aria-describedby="FirstNameHelp"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Last Name
            </label>
            <input
              type="lastname"
              className="form-control"
              id="exampleInputLastName"
              aria-describedby="LastNameHelp"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              ID
            </label>
            <input
              type="lastname"
              className="form-control"
              id="exampleInputLastName"
              aria-describedby="LastNameHelp"
              onChange={(e) => setId(e.target.value)}
              value={id}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="container">
        <div>
          <h4 className="tittel">Add Employees List</h4>
        </div>
        {employees.length < 1 && <div>No Employees are Updated yet</div> }
        {employees.length > 0 && <div>
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
              employees.map((employees) =>(

            <tr key={employees.id}>
              <th scope="row"> {employees.id} </th>
              <td>{employees.firstName}</td>
              <td>{employees.lastName}</td>
              <td>
                <button className="btn btn-primary" 
                onClick={()=>deleteEmployee(employees.id)}>Delete</button>
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
        </div> }

      </div>
    </>
  );
};

export default Update;
