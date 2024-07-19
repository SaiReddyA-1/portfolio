// Example function to handle authentication tokens
export const setAuthToken = (token) => {
  if (token) {
    // Apply the token to every request header
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // You can also save the token to localStorage or sessionStorage for persistent storage
    localStorage.setItem('token', token);
  } else {
    // Clear the token from headers and storage
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

// Example function to check if a user is authenticated
export const isAuthenticated = () => {
  // Check if token exists and is valid (you might have specific validation logic here)
  const token = localStorage.getItem('token');
  return token !== null; // Return true or false based on token existence
};

// Example function to get the currently authenticated user
export const getCurrentUser = () => {
  // Fetch user details from storage or API if needed
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

// Example function to clear authentication data (logout)
export const logout = () => {
  // Clear token and user data from storage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  // Optionally, clear session or local storage for other data
};

// Example function to handle login
export const login = async (username, password) => {
  try {
    // Perform API call to authenticate user
    const response = await axios.post('/api/login', { username, password });
    const { token, user } = response.data;

    // Store token and user data in storage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    // Optionally, set token in axios headers for future requests
    setAuthToken(token);

    return { success: true, user };
  } catch (error) {
    return { success: false, error: error.response.data.message };
  }
};
