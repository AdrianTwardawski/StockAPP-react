import React, { useState, useEffect } from 'react'
import axios from '../api/axios';
const USER_URL = '/api/account/user';

function Home(props) {
  const [user, setUser] = useState();
  const [nationality, setNationality] = useState();
  const [birth, setBirth] = useState();
  const [roleId, setRoleId] = useState();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(USER_URL, { withCredentials: true });
        console.log(response.data);
        setUser(response.data.email);
        setNationality(response.data.nationality);
        setBirth(response.data.dateOfBirth);
        setRoleId(response.data.roleId);
      } catch (err) {
        console.error(err);
      }
    }

    getUser();
  }, [])

  return (
    <article>
      <h2>User info</h2>
      {user ? (
        <p>
          Email: {user}
          <br />
          Nationality: {nationality}
          <br />
          Birth: {birth}
          <br />
          RoleId: {roleId}
        </p>
      ) : <p>You are not logged in</p>
      }

    </article>
  )
}

export default Home