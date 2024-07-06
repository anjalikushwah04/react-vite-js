import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataGridDemo() {
  const [rows, setRows] = useState([])
   const [columns, setColumns] = useState([
  {
    field: 'userid',
    headerName: 'UserId',
    type: 'number',
    width: 110,
    editable: true,
  },
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 150,
    editable: true,
  },
  ])

  useEffect(() => {
    fetchRecords();
    }, []);
  
  const fetchRecords = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
      const records = response.data;
      setRows(records);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <h2>Display the Data in a Table Formate By Using MUI</h2>
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
          disableRowSelectionOnClick
        sx={{
            '& .MuiDataGrid-row': {
              color: 'white',
          },
          '& .MuiDataGrid-checkbox': {
              color: 'white', 
          },
          '& .MuiDataGrid-checkbox.Mui-checked': {
              color: 'white',
            },
          }}  
      />
    </Box >
      </>
  );
}
