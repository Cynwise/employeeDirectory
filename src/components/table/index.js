import React, { useState, useEffect } from 'react';
import EmployeeInformation from '../employee/index';
import Search from '../search/index';
import API from '../../utils/API';

let allEmployees;

const Table = () => {

    const [employeeState, setEmployeeState] = useState([]);
    const [filteredState, setFilteredState] = useState([]);

    useEffect(() => {
        const loadEmployees = () => {
            API.Search()
                .then((res) => {
                    allEmployees = res.data.results;
                    setFilteredState(allEmployees);
                    setEmployeeState(allEmployees);
                })
                .catch(err => console.error(err));
        }
        loadEmployees()

    }, []);

    const handleSearch = (input) => {
        setFilteredState(employeeState.filter((employee) => {
            return employee.name.first.toLowerCase().includes(input.toLowerCase()) ||
                employee.name.last.toLowerCase().includes(input.toLowerCase()) ||
                employee.phone.includes(input.toLowerCase()) ||
                employee.email.toLowerCase().includes(input.toLowerCase()) ||
                employee.location.city.toLowerCase().includes(input.toLowerCase()) ||
                employee.location.state.toLowerCase().includes(input.toLowerCase()) 
        }))
    }

    return (
        <div>
            <Search handleSearch={handleSearch} />
            <table className="table table-hover table-light table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Location (City,State)</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeInformation employeeState={filteredState} />
                </tbody>
            </table>
        </div>
    )
}

export default Table