import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginForm = (props) => {
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        let credentials = {
            username: username,
            password: password
        }
        props.loginUser(credentials)
        navigate('/')
    }
    
    return ( 
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="username" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your username with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>

);
}
 
export default LoginForm;