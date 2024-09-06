// StudentTable.js
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Replace 'https://api.example.com/students' with your actual API endpoint
    axios.get('http://127.0.0.1:8000/students/')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Student ID</th>
          <th>Email Address</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.id}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default StudentTable;

