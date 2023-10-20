import React, { useState } from 'react';

const UserForm = ({ onSubmit, initialData = {}, buttonText = 'Submit' }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    age: initialData.age || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default UserForm;
