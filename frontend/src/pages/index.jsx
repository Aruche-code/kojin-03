import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import UserListItem from '../components/UserListItem';

const IndexPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // ユーザーのデータを取得する
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (newUser) => {
    try {
      const response = await axios.post('/api/users', newUser);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <UserForm onSubmit={handleAddUser} />
      {users.map((user) => (
        <UserListItem key={user.id} user={user} onDelete={handleDeleteUser} />
      ))}
    </div>
  );
};

export default IndexPage;
