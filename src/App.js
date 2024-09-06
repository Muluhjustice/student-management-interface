import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import StudentTable from './components/StudentTable';
import FetchData from './components/Datatable';
import Sidebar from './components/Sidebar';
import Editstudent from './components/Editstudent';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div>
          <Routes>
            <Route path="/StudentTable" element={<StudentTable />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Board" element={<Board />} />
            <Route path="/FetchData" element={<FetchData />} />
            <Route path="/Editstudent/:id" element={<Editstudent/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

