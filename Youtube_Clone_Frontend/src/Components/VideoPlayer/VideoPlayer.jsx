import React from "react";
import { Card } from 'react-bootstrap';
import YoutubeEmbed from "./YoutubeEmbed";
import Comment from "../Comment/Comment";
import DisplayComment from "../CommentList/CommentList";
import './VideoPlayer.css'



function VideoPlayer(props) {
  // console.log(props.searchVideoID)
  // console.log(props.videoTitle)
  return (
    <div className="container">
      <Card className='parent' style={{ width: '54rem' }}>
        <div className='div1'>
        {/* Iframe is in the Youtubeembed component */}
        <YoutubeEmbed embedId={props.searchVideoID} />
        <Card.Body>
          <Card.Title>{props.videoTitle}</Card.Title>
          <Card.Text>
            {props.videoDescription}
          </Card.Text>
          <Card.Title>Create Comment</Card.Title>
          <Comment searchVideoID={props.searchVideoID} jwt={props.jwt} user={props.user} getAllComments={props.getAllComments} />
          <Card.Title>DisplayComment</Card.Title>
          <DisplayComment searchVideoID={props.searchVideoID} />
          <Card.Title>Like/Dislike</Card.Title>
        </Card.Body>
        </div>
      </Card>
    </div>
  );
}

export default VideoPlayer;
