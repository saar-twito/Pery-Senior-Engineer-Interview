import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',  // Replace with your backend URL if different
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
