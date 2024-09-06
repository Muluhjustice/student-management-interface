import React, { useState } from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

const Dashboard = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);

    // Send student data to the backend API
    axios.post('http://127.0.0.1:8000/students/', student)
      .then(response => {
        console.log('Student added successfully:', response.data);
        // Optionally, reset the form or update the state
        setStudent({
          firstName: '',
          lastName: '',
          email: '',
          dateOfBirth: '',
        });
      })
      .catch(error => {
        console.error('There was an error adding the student:', error);
      });
  };

  return (
    <div className="add-student-container mt-5">
      <h2>Add student</h2>
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
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default Dashboard;
