import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const RegistrationForm = (props) => {

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        let credentials = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            password: password,
            email: email,
        }
        props.createUser(credentials)
        navigate('/login')
    }


    return ( 
// Modal
//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Registration</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
// form
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" onChange={(event) => setFirstName(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" onChange={(event) => setUsername(event.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
        </Form.Group>
{/* password validation box */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password Again</Form.Label>
          <Form.Control type="password" placeholder="Password Again" onChange={(event) => setPassword(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" >Register
        </Button>
      </Form>
      //         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose} >
//             Close
//           </Button>
//           <Button variant="primary" onClick={submit} >
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
     );
}
 
export default RegistrationForm;