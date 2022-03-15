import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

const ReplyForm = (props) => {

    const [reply, setReply] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
          let replies = {
          reply: reply
        }

        props.loginUser(replies)
    }


    return (         
    
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>{ user.username }</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicReply">
          <Form.Control type="text" placeholder="Reply to this comment" onChange={(event) => setReply(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Reply
        </Button>
      </Form>
    );
}
 
export default ReplyForm;