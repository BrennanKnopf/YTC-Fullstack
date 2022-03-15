import axios from 'axios';
import React, {useState} from 'react';

const Comment = (props) => {
        const [text, setText] = useState('')
        const [likes, setLikes] = useState(0)
        const [dislikes, setdisLikes]= useState(0)

        const[newComment, setNewComment] = useState({})
      




        function handleSubmit(event) {
            event.preventDefault();
            let newComment = {
                user: props.user.user_id,
                video_id: props.searchVideoID,
                text: text,
                likes: likes,
                dislikes: dislikes,
            };
            CreateComment(newComment)
            setNewComment(newComment)
        }

        async function CreateComment(newComment){
            console.log(props.user.user_id)
            let response = await axios.post(`http://127.0.0.1:8000/api/comments/${props.user.user_id}`, newComment, { headers: {Authorization: 'Bearer ' + props.jwt}})
            // console.log(response)
            if(response.status === 201){
                await props.getAllComments()
        }
    }
        return (
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <label>Post:</label>
                    <input required type='text' className="form-control" value={text} onChange={(event) => setText(event.target.value)} />
                    <button type='submit' className="btn btn-primary" style={{'marginTop': '1em'}}>Post</button>
                </div>
            </form>
        );
    }
export default Comment;