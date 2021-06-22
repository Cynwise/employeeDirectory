import React from 'react'

const Employee = (props) => {

    const employeeInformation = props.employeeState
    return(

        employeeInformation.map((employee) => 
    
            <tr key = {employee.id.value || employee.name.first}>

                <th scope = "row"><img alt = {employee.name.first} src = {employee.picture.thumbnail}></img></th>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.location.city}, {employee.location.state}</td>
            </tr>
        )
    )
}

export default Employee;