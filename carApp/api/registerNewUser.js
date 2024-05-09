import axios from 'axios';

const registerNewUser = async (userLogin, userPassword) => {
  try {
    const response = await axios.post(`http://127.0.0.1:8000/registerNewUser?userLogin=${userLogin}&userPassword=${userPassword}`);
                                       
    console.log('Registration successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export default registerNewUser;
