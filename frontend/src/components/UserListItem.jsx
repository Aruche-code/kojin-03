import React from 'react';
import Link from 'next/link';

const UserListItem = ({ user, onDelete }) => (
  <div>
    <Link href={`/users/${user.id}`}>
      <a>{user.name}</a>
    </Link>
    {' - '}
    <button onClick={() => onDelete(user.id)}>Delete</button>
  </div>
);

export default UserListItem;
