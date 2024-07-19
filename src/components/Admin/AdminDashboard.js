import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../actions/userActions';
import { fetchPosts } from '../actions/postActions';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users); // Assuming 'users' is stored in 'users' array in Redux state
  const posts = useSelector(state => state.posts.posts); // Assuming 'posts' is stored in 'posts' array in Redux state

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-4xl mx-auto bg-white p-5 rounded shadow">
        <h2 className="text-2xl mb-5 text-center font-bold">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Users</h3>
            {users.length === 0 ? (
              <p className="text-gray-500">No users found.</p>
            ) : (
              <ul>
                {users.map(user => (
                  <li key={user._id} className="mb-2">
                    <span className="font-semibold">{user.name}</span> - {user.email}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Posts</h3>
            {posts.length === 0 ? (
              <p className="text-gray-500">No posts found.</p>
            ) : (
              <ul>
                {posts.map(post => (
                  <li key={post._id} className="mb-2">
                    <span className="font-semibold">{post.title}</span> - {post.author}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
