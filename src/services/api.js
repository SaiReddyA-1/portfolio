import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: 'https://api.example.com/', // Replace with your API base URL
  timeout: 10000, // Timeout duration in milliseconds (10 seconds)
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers as needed
  },
});

// Request interceptor for adding authorization token
api.interceptors.request.use(
  (config) => {
    // Modify config headers or add token logic here
    // Example: config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle global errors
api.interceptors.response.use(
  (response) => {
    // Handle success cases globally
    return response.data; // Return only the data from the response
  },
  (error) => {
    // Handle error cases globally
    return Promise.reject(error); // Pass the error to the calling function
  }
);

// Example API functions
const apiFunctions = {
  fetchPosts: () => api.get('/posts'),
  fetchPostById: (postId) => api.get(`/posts/${postId}`),
  createPost: (postData) => api.post('/posts', postData),
  updatePost: (postId, postData) => api.put(`/posts/${postId}`, postData),
  deletePost: (postId) => api.delete(`/posts/${postId}`),
  // Add more API functions as needed
};

export default apiFunctions;
