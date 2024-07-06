import React from 'react';
import { useState, useEffect } from 'react';
import DataGridDemo from './DataGridDemo';
import DepartmentCheckbox from './DepartmentCheckbox';
import './App.css'

const App: React.FC = () => {
  const [col, setCol] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://localhost:5173/Data.json')
      .then(res => res.json())
      .then(data => {
        setCol(Object.keys(data.users[0]))
        setRecords(data.users)
        })
    }, [])

  return (
    <>
      <h1>Welcome to Second Page</h1>
      <DataGridDemo />
      <DepartmentCheckbox/>
    </>
    
  );
};

export default App;
