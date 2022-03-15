import { Routes, Route, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import jwt_decode from 'jwt-decode';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import axios from 'axios';
import HomePage from './Components/HomePage/HomePage';



function App() {
  
  const [user, setUser] = useState(null)
  console.log(user)
  const [jwt, setJwt] = useState('')
  console.log(jwt)
 

  let navigate = useNavigate();
  useEffect(() => {

    const jwt = localStorage.getItem('token');
    
    try {
      const decodedUser = jwt_decode(jwt);
      setUser(decodedUser);
      setJwt(jwt)

    } catch { }
  }, [])

  async function createUser(credentials){
    console.log(credentials)
    let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', credentials);
    if(response.status === 201){
      navigate('/')

     
    }
  }
  async function loginUser(user){
    console.log(user)
    let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', user);
    console.log(response)
    if(response.status === 200){
      localStorage.setItem('token', response.data.access)
      window.location.reload(false)
      navigate('/')
    }
  }
  
  function logOut(){
    console.log('Logout Triggered');
    localStorage.removeItem('token');
    setUser(null)
    window.location = "/"
    navigate("/")
  }

  return (
    <div>
      <NavigationBar user={user} logOut={logOut} />
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage jwt={jwt} user={user} />} />
          <Route path='register' element= {<RegistrationForm createUser={createUser} />} />
          <Route path='login' element = {<LoginForm loginUser={loginUser} />} />
          <Route path= 'logout' element={<HomePage logOut={logOut} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
