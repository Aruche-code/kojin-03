import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserForm from '../../components/UserForm';

const UserDetailsPage = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { id } = router.query; // URLからIDを取得

  useEffect(() => {
    // ユーザー詳細情報を取得
    const fetchUser = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/users/${id}`);
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      }
    };

    fetchUser();
  }, [id]);

  const handleUpdateUser = async (updatedUser) => {
    try {
      const response = await axios.put(`/api/users/${id}`, updatedUser);
      setUser(response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(`/api/users/${id}`);
      router.push('/'); // メインページにリダイレクト
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm onSubmit={handleUpdateUser} initialData={user} buttonText="Update" />
      <button onClick={handleDeleteUser}>Delete User</button>
    </div>
  );
};

export default UserDetailsPage;
