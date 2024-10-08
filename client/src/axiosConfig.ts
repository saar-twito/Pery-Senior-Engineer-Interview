import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'https://server-4934.onrender.com', // backend server URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
