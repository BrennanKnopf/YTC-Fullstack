import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import axios from 'axios';
import RelatedVideos from '../RelatedVideos/RelatedVideos';


const HomePage = (props) => {
    const [videoTitle, setVideoTitle] = useState('Rick Astley - Never Gonna Give You Up (Official Music Video)')
    // console.log(videoTitle)
    const [searchVideoID, setSearchVideoID] = useState("dQw4w9WgXcQ")
    const [videoDescription, setVideoDescription] = useState('The official video for “Never Gonna Give You Up” by Rick Astley')
    // console.log(videoDescription)




    async function searchYouTube(searchTerm) {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBZqgcJ2BqATwghVohC4X7EgylMRAO6cKM&part=snippet&type=video&q=${searchTerm}`);
        // console.log(response.data)
        setSearchVideoID(response.data.items[0].id.videoId)
        setVideoTitle(response.data.items[0].snippet.title)
        setVideoDescription(response.data.items[0].snippet.description)

    }

    return (

        <div>
            <SearchBar searchYouTube={searchYouTube}  />
            <VideoPlayer searchVideoID={searchVideoID} videoTitle={videoTitle} videoDescription={videoDescription} jwt={props.jwt} user={props.user} />
            <RelatedVideos searchVideoID={searchVideoID} setSearchVideoID={setSearchVideoID} setVideoTitle={setVideoTitle} setVideoDescription={setVideoDescription} />
        </div>
    )

}
export default HomePage;