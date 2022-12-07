import { useState, useEffect } from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
  let renderedUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>{" "}
      </div>
    );
  });

  return (
    <div>
      <div>{renderedUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;
