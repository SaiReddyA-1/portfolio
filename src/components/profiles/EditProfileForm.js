import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserProfile } from '../actions/userActions';

const EditProfileForm = () => {
  const userProfile = useSelector(state => state.users.userProfile); // Assuming 'userProfile' is stored in 'userProfile' object in Redux state
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: ''
  });

  useEffect(() => {
    if (userProfile) {
      setFormData({
        name: userProfile.name,
        email: userProfile.email,
        bio: userProfile.bio || ''
      });
    }
  }, [userProfile]);

  const { name, email, bio } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      name,
      email,
      bio
    };
    dispatch(updateUserProfile(updatedProfile));
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea id="bio" name="bio" value={bio} onChange={handleChange} rows="5" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
