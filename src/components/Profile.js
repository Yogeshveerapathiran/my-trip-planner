import React from "react";

export default function Profile({ user }) {
  return (
    <div>
      <h2>Your Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
    </div>
  );
}
