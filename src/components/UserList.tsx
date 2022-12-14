/*eslint-disable */
import React, { useEffect } from "react";

import { fetchUsers } from "../store/action-creator/user";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
};

export default UserList;
