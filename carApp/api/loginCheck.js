import axios from 'axios';




const checkLogin_Password= async (userLogin, userPassword) => {
  try {
    const response = await axios.get(`https://stiff-blondell-dimaldinho-a2062e7b.koyeb.app/getUserByLogin?userLogin=${userLogin}`);
    console.log(response.data[0]['user_login']);
    if(response.data[0]['user_login'] == userLogin){
      //console.log("Login correct")
      if(response.data[0]['user_password'] == userPassword){
        return true
      }
    }
    //console.log("Error")
    return false
    
    
    
    
    
  } catch (error) {
    console.error('Error loging user:', error);
    throw error;
  }
};

export default checkLogin_Password;
