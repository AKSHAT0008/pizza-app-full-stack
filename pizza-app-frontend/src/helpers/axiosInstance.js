import  axios from 'axios'
const axiosInstance = axios.create();
// axiosInstance.defaults.baseURL = "https://pizza-backend-s2hh.onrender.com"
axiosInstance.defaults.baseURL = "http://localhost:5500"
axiosInstance.defaults.withCredentials = true;  // ✅ applies to your instance
export default axiosInstance;