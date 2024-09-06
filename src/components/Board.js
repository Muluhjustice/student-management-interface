import React from 'react';
import { FaPersonBooth, FaUniversity, FaRegEye } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Board.css'; // Import your CSS file for styling

const Board = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Students Dashboard</h1>
      <p>Here is how you can manage students</p>
      <ul className="dashboard-options">
        <li className="dashboard-item">
          <FaPersonBooth className="icon" /> 
          <span>   View all students</span>
          <p>View all the students stored in our database.</p>
        </li>
        <li className="dashboard-item">
          <FaUniversity className="icon" /> 
          <span>   Add student to the system</span>
        </li>
        <li className="dashboard-item">
          <FaRegEye className="icon" /> 
          <span>   Edit and Delete student</span>
          <p>You can also edit and delete users on the system.</p>
        </li>
      </ul>
    </div>
  );
};

export default Board;
