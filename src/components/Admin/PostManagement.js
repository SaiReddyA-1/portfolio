import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';

const PostManagement = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts); // Assuming 'posts' is stored in 'posts' array in Redux state

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(deletePost(postId));
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">Post Management</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found.</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {posts.map(post => (
                <tr key={post._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button onClick={() => handleDelete(post._id)} className="text-red-600 hover:text-red-900">Delete</button>
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

export default PostManagement;

