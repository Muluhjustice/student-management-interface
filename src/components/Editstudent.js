import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const EditStudent = () => {
    const { id } = useParams(); // Get the student ID from the URL
    const navigate = useNavigate(); // Hook to navigate programmatically
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
    });

    useEffect(() => {
        // Fetch the student details by ID when the component mounts
        axios.get(`http://127.0.0.1:8000/students/${id}/`)
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the student:', error);
            });
    }, [id]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(student);

        // Send updated student data to the backend API
        axios.put(`http://127.0.0.1:8000/students/${id}/`, student)
            .then(response => {
                console.log('Student updated successfully:', response.data);
                // Redirect to FetchData component after successful update
                navigate('/FetchData');
            })
            .catch(error => {
                console.error('There was an error updating the student:', error);
            });
    };

    return (
        <div className="add-student-container mt-5">
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="f1 col-md-8">
                        <div className="form-group col-md-4">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={student.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="f2 col-md-4">
                        <div className="form-group col-md-4">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={student.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="f3 col-md-8">
                        <div className="form-group col-md-4">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={student.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="f4 col-md-4">
                        <div className="form-group col-md-4">
                            <label>Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={student.dateOfBirth}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Edit Student</button>
            </form>
        </div>
    );
};

export default EditStudent;
