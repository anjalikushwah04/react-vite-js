import React from 'react';
import DataGridDemo from './DataGridDemo';
import DepartmentCheckbox from './DepartmentCheckbox';
import './App.css'


const App: React.FC = () => {

  return (
    <>
      <h1>Welcome to Second Page</h1>
      <DataGridDemo />
      <DepartmentCheckbox/>
    </>
    
  );
};

export default App;
