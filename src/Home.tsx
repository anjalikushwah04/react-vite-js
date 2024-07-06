import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import './home.css'

interface UserDetails {
    name: string;
        phone: string;
    email: string;

}

const First: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({ name: '', phone:'' ,email: '' });
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
        if (userDetails.name && userDetails.email && userDetails.phone) {
            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            navigate('/second');
        } else {
            alert('Please enter the required User Detail before accessing the page');
        }
}

  return (
    <>
      <h2 className='heading'>Welcome to our Application by using ReactJs,TypescriptJs,ViteJs with MUI</h2>
      <form onSubmit={handleSubmit} className='design'>
        <h3>Home Page</h3>
        <label className='gap'>
          Name:
          <input
            type="text"
            value={userDetails.name}
            onChange={(event) => setUserDetails({ ...userDetails, name: event.target.value })}
          />
        </label>
              <br />
              <label className='gap'>
          Phone:
          <input
            type="tel"
            value={userDetails.phone}
            onChange={(event) => setUserDetails({ ...userDetails, phone: event.target.value })}
          />
              </label>
              <br/>
        <label className='gap'>
          Email:
          <input
            type="email"
            value={userDetails.email}
            onChange={(event) => setUserDetails({ ...userDetails, email: event.target.value })}
          />
        </label>
              <br />
              <Button variant="contained" type='submit'>Submit</Button>
      </form>
    </>
  );
};

export default First;