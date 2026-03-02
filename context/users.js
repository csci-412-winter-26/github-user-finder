// create a context to manage the list of users
import { createContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const isMounted = useRef(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // get request to the mockup server to get the list of users
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:3000/users');
      if (isMounted.current) {
        setUsers(response.data);
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err.message);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
    return () => {
      isMounted.current = false;
    };
  }, []);

  // create a new user and add it to the list of users
  const createUser = async (user) => {
    setError(null);
    try {
      const response = await axios.post('http://localhost:3000/users', user);
      if (isMounted.current) {
        setUsers((prevUsers) => [...prevUsers, response.data]);
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err.message);
      }
    }
  };

  // delete a user from the list of users
  const deleteUser = async (id) => {
    setError(null);
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      if (isMounted.current) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err.message);
      }
    }
  };

  return (
    <UsersContext.Provider value={{ users, setUsers,loading, error, createUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
