import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, deleteUser } from '../actions/userActions';

const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users); // Assuming 'users' is stored in 'users' array in Redux state

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(userId));
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">User Management</h2>
        {users.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleDelete(user._id)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
