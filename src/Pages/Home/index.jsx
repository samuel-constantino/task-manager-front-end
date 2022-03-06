import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';

export default function Tasks() {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <h1>HOME PAGE</h1>
      <button type="button" onClick={ logout }>Logout</button>
    </>
  );
}
