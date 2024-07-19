import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../actions/userActions';

const Profile = ({ userId }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.users.userProfile); // Assuming 'userProfile' is stored in 'userProfile' object in Redux state

  useEffect(() => {
    dispatch(fetchUserProfile(userId));
  }, [dispatch, userId]);

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">User Profile</h2>
        {userProfile ? (
          <div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-lg font-semibold">{userProfile.name}</p>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <p className="mt-1 text-lg font-semibold">{userProfile.email}</p>
            </div>
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
              <p className="mt-1">{userProfile.bio}</p>
            </div>
            {/* Add more fields as needed */}
          </div>
        ) : (
          <p className="text-gray-500">Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
