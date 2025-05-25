import React from "react";

export default function NavBar({ current, onNav, onLogout }) {
  return (
    <nav className="top-nav">
      <button
        className={current === "home" ? "active" : ""}
        onClick={() => onNav("home")}
      >
        Home
      </button>
      <button
        className={current === "profile" ? "active" : ""}
        onClick={() => onNav("profile")}
      >
        Profile
      </button>
      <button
        className={current === "trips" ? "active" : ""}
        onClick={() => onNav("trips")}
      >
        Trips
      </button>
      <button onClick={onLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
}
