import React, { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [mode, setMode] = useState("login"); // 'login' or 'signup'

  // Form fields stored in an object for conditional rendering & easy use
  const initialForm = {
    name: "",
    email: "",
    gender: "male",
  };
  const [form, setForm] = useState(initialForm);

  // Handle form input changes
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Fake login/signup validation
  function handleSubmit(e) {
    e.preventDefault();

    if (mode === "signup") {
      if (!form.name || !form.email) {
        alert("Please fill all fields");
        return;
      }
      onLogin(form);
    } else {
      // For demo, accept any email for login if matches entered email
      if (!form.email) {
        alert("Please enter your email");
        return;
      }
      // For demo, just accept login with email and default name + gender
      onLogin({
        name: "Demo User",
        email: form.email,
        gender: "male",
      });
    }
  }

  return (
    <div className="login-form">
      <h2>{mode === "login" ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </>
        )}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{mode === "login" ? "Login" : "Sign Up"}</button>
      </form>
      <p
        className="toggle-mode"
        onClick={() => {
          setMode(mode === "login" ? "signup" : "login");
          setForm(initialForm);
        }}
      >
        {mode === "login"
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </p>
    </div>
  );
}
