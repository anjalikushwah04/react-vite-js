import * as React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import "./DepartmentCheckbox.css"
interface Department {
  id: number;
  name: string;
  isSelected: boolean;
  subdepartments: Subdepartment[];
  isExpanded: boolean;

}

interface Subdepartment {
  id: number;
  name: string;
  isSelected: boolean;
  departmentId: number;
}

const departments: Department[] = [
  {
    id: 1,
    name: 'Agriculture & Fishing',
    isSelected: false,
    subdepartments: [
      { id: 1, name: 'Crops', isSelected: false, departmentId: 1 },
      { id: 2, name: 'Farming Animals & LiveStock', isSelected: false ,departmentId: 1 },
      { id: 3, name: 'Fishery & Aquaculture', isSelected: false,departmentId: 1  },
      { id: 4, name: 'Ranching', isSelected: false,departmentId: 1  },
    
    ],
    isExpanded:false,
  },
  {
    id: 2,
    name: 'Bussiness Services',
    isSelected: false,
    subdepartments: [
      { id: 1, name: 'Acounting & Accounting Services', isSelected: false,departmentId: 2  },
      { id: 2, name: 'Auctions', isSelected: false,departmentId: 2  },
      { id: 3, name: 'Bussiness Services - General', isSelected: false ,departmentId: 2 },
      { id: 4, name: 'Call Centers & Bussiness Centers', isSelected: false,departmentId: 2  },
      { id: 7, name: 'Career PLanning', isSelected: false,departmentId: 2  },
    ],
      isExpanded:false,
  },
];



const DepartmentCheckbox = () => {
  const [departmentsState, setDepartmentsState] = React.useState(departments);
  const department = departments.map((departmentJson) => ({
  id: departmentJson.id,
  name: departmentJson.name,
  isSelected: departmentJson.isSelected,
  subdepartments: departmentJson.subdepartments.map((subdepartmentJson) => ({
    id: subdepartmentJson.id,
    name: subdepartmentJson.name,
    isSelected: subdepartmentJson.isSelected,
    departmentId: subdepartmentJson.departmentId,
  })),
}));





  const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>, department: Department) => {
  const updatedDepartments = departmentsState.map((d) => {
    if (d.id === department.id) {
      d.isSelected = event.target.checked;
      d.subdepartments.forEach((subdepartment) => {
        subdepartment.isSelected = event.target.checked;
      });
    } else {
      d.subdepartments.forEach((subdepartment) => {
        subdepartment.isSelected = false;
      });
    }
    return d;
  });
  setDepartmentsState(updatedDepartments);
};
const handleSubdepartmentChange = (event: React.ChangeEvent<HTMLInputElement>, subdepartment: Subdepartment) => {
  // const handleSubdepartmentChange = (event: React.ChangeEvent<HTMLInputElement>, subdepartment: Subdepartment) => {
  const updatedDepartments = departmentsState.map((department) => {
    if (department.id === subdepartment.departmentId) {
      department.subdepartments = department.subdepartments.map((sd) => {
        if (sd.id === subdepartment.id) {
          sd.isSelected = event.target.checked;
        }
        return sd;
      });
      
      // Check if all subdepartments are selected, if so, select the parent department
      const allSubdepartmentsSelected = department.subdepartments.every((sd) => sd.isSelected);
      department.isSelected = allSubdepartmentsSelected;
    } else {
      department.subdepartments.forEach((sd) => {
        sd.isSelected = false;
      });
    }
    return department;
  });
  setDepartmentsState(updatedDepartments);
};
  
  const handleExpand = (department: Department) => {
    const updatedDepartments = departmentsState.map((d) => {
      if (d.id === department.id) {
        d.isExpanded =!d.isExpanded;
      }
      return d;
    });
    setDepartmentsState(updatedDepartments);
  };

  return (
    <>
      <h2>Convert the Retrived JSON Data into Model </h2>
      {department.map((depart) => (
        <div key={depart.id}>{depart.name}</div>
      ))}

      <h2>CheckBox with Expand and Collapse Functionality</h2>
    <FormGroup>
      {departmentsState.map((department) => (
        <div key={department.id} className='margin1'>
          <FormControlLabel
            control={
              <Checkbox
                checked={department.isSelected}
                onChange={(event) => handleDepartmentChange(event, department)}
              />
            }
            label={department.name}
          />
          <button onClick={() => handleExpand(department)}>
            {department.isExpanded? 'Collapse' : 'Expand'}
          </button>
          {
            department.isExpanded && (
              <div>
                {
                  department.subdepartments.map((subdepartment) => (
                    <div key={subdepartment.id} className='margin2'>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={subdepartment.isSelected}
                            onChange={(event) => handleSubdepartmentChange(event, subdepartment)}
                          />
                        }
                        label={subdepartment.name}
                      />
                    </div>
                  ))}
              </div>
            )}
        </div>
      ))}
      </FormGroup>
      </>
  );
};

export default DepartmentCheckbox;