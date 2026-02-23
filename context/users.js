// create a context of all stored users
import { createContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  // get users from mockup backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users');
        if (isMounted.current) {
          setUsers(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        if (isMounted.current) {
          setError(error);
          setLoading(false);
        }
      }
    };
    fetchUsers();

    // clean up function
    return () => {
      isMounted.current = false;
    };
  }, []);

  // function that adds a new user to the backend and updates the context
  const addUser = async (user) => {
    try {
      const response = await axios.post('http://localhost:3000/users', user);
      if (isMounted.current) {
        setUsers((prevUsers) => [...prevUsers, response.data]);
      }
    } catch (error) {
      console.error('Error adding user:', error);
      if (isMounted.current) {
        setError(error);
      }
    }
  };

  // function that deletes a user from the backend and updates the context
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      if (isMounted.current) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      if (isMounted.current) {
        setError(error);
      }
    }
  };

  return (
    <UsersContext.Provider value={{ users, setUsers, loading, error, addUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
