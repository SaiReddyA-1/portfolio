import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users); // Assuming 'users' is stored in 'users' array in Redux state

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Users</h2>
      {users.length === 0 ? (
        <p className="text-gray-500">No users found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {users.map(user => (
            <div key={user._id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{user.name}</h3>
              <p className="text-gray-600 mb-4">{user.email}</p>
              {/* Add more user information as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
