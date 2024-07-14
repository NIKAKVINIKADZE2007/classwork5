import React, { useState } from 'react';

const Password = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeusername = (event) => {
    setUsername(event.target.value);
  };

  const changepassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <input type='text' placeholder='username' onChange={changeusername} />
      <input type='password' placeholder='password' onChange={changepassword} />
      <p>your name: {username}</p>
      <p>your password {password}</p>
    </>
  );
};

export default Password;
