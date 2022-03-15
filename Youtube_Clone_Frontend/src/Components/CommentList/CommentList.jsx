import React, {useState, useEffect} from 'react';
import axios from 'axios';


const DisplayComment = (props) => {
    const[allComments, setAllComments] = useState([])
    console.log(allComments)

    async function getAllComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/all/${props.searchVideoID}`);
        console.log(response)
        setAllComments(response.data);
    }

    useEffect(() => {
        getAllComments()
    }, [props.searchVideoID])

    return (
        <table className="borderLine">
          {allComments.map((comment) => {
              console.log(comment)
            return (
                <tbody>
                    <tr style={{'marginTop': '1em'}}>
                        <th>{comment.name}</th>
                    </tr>
                    <tr style={{'marginTop': '1em'}}>
                        <td>{comment.comments}</td>
                    </tr>
                </tbody>
            );
          })}
        </table>
        );
        }
export default DisplayComment;