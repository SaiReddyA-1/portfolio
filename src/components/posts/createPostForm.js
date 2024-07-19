import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const { title, body } = formData;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      body
    };
    dispatch(createPost(postData));
    setFormData({ title: '', body: '' }); // Clear form fields after submission
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" id="title" name="title" value={title} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
            <textarea id="body" name="body" value={body} onChange={handleChange} rows="5" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
