import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import './App.css';  // or the correct path to your CSS file
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Trips from "./components/Trips";

function App() {
  // User data: name, email, gender
  const [user, setUser] = useState(null);

  // Current page/view: login, home, profile, trips
  const [page, setPage] = useState("login");

  // Trips array for logged in user
  const [trips, setTrips] = useState([]);

  // useEffect: Reset page to login on logout
  useEffect(() => {
    if (!user) setPage("login");
  }, [user]);

  // Handle login/signup success
  function handleLogin(userData) {
    setUser(userData);
    setPage("home");
  }

  // Logout handler
  function logout() {
    setUser(null);
    setTrips([]);
  }

  return (
    <>
      {user && (
        <NavBar current={page} onNav={setPage} onLogout={logout} />
      )}

      <div className="container">
        {!user && <LoginForm onLogin={handleLogin} />}
        {user && page === "home" && <Home />}
        {user && page === "profile" && <Profile user={user} />}
        {user && page === "trips" && (
          <Trips trips={trips} setTrips={setTrips} />
        )}
      </div>
    </>
  );
}

export default App;
