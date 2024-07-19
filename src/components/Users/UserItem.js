import React from 'react';

const UserItem = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">{user.name}</h3>
      <p className="text-gray-600 mb-4">{user.email}</p>
      {/* Add more user information as needed */}
    </div>
  );
};

export default UserItem;
