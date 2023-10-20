import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // ユーザーのデータを取得する
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users'); // Next.jsを使用する場合は、相対URLを利用できます
        setUsers(response.data);
      } catch (error) {
        console.error('There was an error fetching the users!', error);
      }
    };

    fetchUsers();
  }, []);

  // 新しいユーザーを追加する
  const addUser = async () => {
    try {
      const response = await axios.post('/api/users', { name, age });
      setUsers([...users, response.data]);
      setName('');
      setAge('');
    } catch (error) {
      console.error('There was an error creating the user!', error);
    }
  };

  // ユーザーを削除する
  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error('There was an error deleting the user!', error);
    }
  };

  return (
    <div>
      {/* ユーザー作成フォーム */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={addUser}>Add User</button>
      </div>

      {/* ユーザーのリスト */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old) - <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
