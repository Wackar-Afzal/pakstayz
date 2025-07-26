import axios from 'axios';
import { getToken } from './TokenValidation';
import { toast } from 'react-toastify';
import { useAuthBannerStore } from '@/store/store';
const setAuthBanner = useAuthBannerStore.getState().setAuthBanner;
// Create an Axios instance
const api = axios.create({
  baseURL:process.env.API_URL,
});


// Request interceptor to add the token to headers
api.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.authorization = `${token}`;
    }
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(timeZone,"timezone in header")
    config.headers.Timezone = timeZone; // Add timezone in the header
    return config;
  },

  
  error => Promise.reject(error)
);

// Response interceptor to handle "Invalid Token" error
api.interceptors.response.use(
  response => response,
  error => {
    console.log(error,"error in axios interceptort")
    if ((error.response && error.response.data && error.response.data.message) === 'Unauthorized: Invalid token'  || error.message === 'Unauthorized: Invalid token' || error.toString()==='Unauthorized: Invalid token' ) {
      // Trigger the desired function for "Invalid Token" response
      handleInvalidToken();
    }

    return Promise.reject(error);
  }
);

// Function to handle "Invalid Token" response
function handleInvalidToken() {
  // Log the action
  console.log('Token is invalid. Handling invalid token...');
  // toast.error("Please Login to continue")
  // Clear user data from local storage
  localStorage.removeItem('ur');
  setAuthBanner({ show: true, signIn: true });
    // Redirect the user to the login page
  // window.location.href = '/signin'; // Adjust the URL to your login page route
}



// function handleRelogin(){
//   toast.error("Please Login First")
//   localStorage.removeItem('ur');
//   window.location.href = '/signin'; 
// }

// Export the configured Axios instance
export default api;



