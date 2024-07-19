import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.body}</p>
      <div className="flex items-center">
        <span className="text-gray-500 mr-2">{new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="text-gray-500">Author: {post.author}</span>
      </div>
    </div>
  );
};

export default PostItem;
