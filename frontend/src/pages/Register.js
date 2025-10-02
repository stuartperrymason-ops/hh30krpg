import React, { useState } from 'react';
function Register({ onRegister }) {
  const [form, setForm] = useState({ username: '', email: '', password: '', legion: '', primarch: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    // Implement registration logic (call API)
    onRegister(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" />
      <input name="legion" value={form.legion} onChange={handleChange} placeholder="Legion" />
      <input name="primarch" value={form.primarch} onChange={handleChange} placeholder="Primarch" />
      <button type="submit">Register</button>
    </form>
  );
}
export default Register;