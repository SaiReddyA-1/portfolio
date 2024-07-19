import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts); // Assuming 'posts' is stored in 'posts' array in Redux state

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Posts</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <div key={post._id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.body}</p>
              <div className="flex items-center">
                <span className="text-gray-500 mr-2">{new Date(post.createdAt).toLocaleDateString()}</span>
                <span className="text-gray-500">Author: {post.author}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
