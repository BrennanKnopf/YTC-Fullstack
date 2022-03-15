import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const CommentForm = (props) => {

    const [comment, setComment] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
          let comments = {
          comment: comment
        }

        props.loginUser(comments)
    }

    async function postComment(){
      let response = await axios.post('http://127.0.0.1:8000/api/comments/')

    }
  };

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>{ user.username }</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicComment">
          <Form.Control type="text" placeholder="Add a comment" onChange={(event) => setComment(event.target.value)}/>
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
 
export default CommentForm;