import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Datatable.css'; // Import the CSS file
import { NavLink } from 'react-router-dom';

function FetchData() {
    const [data, setData] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [newStudent, setNewStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: ''
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/students/')
            .then(res => setData(res.data))
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    const handleRowClick = (student) => {
        setSelectedStudent(student);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/students/', newStudent)
            .then(res => {
                setData([...data, res.data]);
                setSelectedStudent(null);
                setNewStudent({
                    firstName: '',
                    lastName: '',
                    email: '',
                    dateOfBirth: ''
                });
            })
            .catch(err => {
                console.error('Error adding student:', err);
            });
    };

    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:8000/students/${selectedStudent.id}/`)
            .then(() => {
                setData(data.filter(student => student.id !== selectedStudent.id));
                setSelectedStudent(null);
            })
            .catch(err => {
                console.error('Error deleting student:', err);
            });
    };

    return (
        <div className='container-fluid' style={{ position: 'fixed', left: '20%', top: '15%', width: '85%' }}>
            <NavLink to='/Dashboard' className='btn btn-primary mt-3 mb-8' style={{ left: '20%', position: 'fixed', top: 5 }}>
                Add Student
            </NavLink>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Student ID</th>
                                <th>Email Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((user, index) => (
                                <tr key={index} onClick={() => handleRowClick(user)}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedStudent && (
                    <div className='col-md-4 btn btn-primary'>
                        <div className=' mt-5 '>
                            <div className='card-body '>
                                <h4 className='card-title'>Selected Student Details</h4>
                                <p className='card-text'><strong>First Name:</strong> {selectedStudent.firstName}</p>
                                <p className='card-text'><strong>Last Name:</strong> {selectedStudent.lastName}</p>
                                <p className='card-text'><strong>Email Address:</strong> {selectedStudent.email}</p>
                                <p className='card-text'><strong>Date of Birth:</strong> {selectedStudent.dateOfBirth}</p>
                                <div className='button-group'>
                                    <NavLink to={`/Editstudent/${selectedStudent.id}`} className='btn btn-edit mr-2'>Edit</NavLink>
                                    <button className='btn btn-delete' onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchData;
