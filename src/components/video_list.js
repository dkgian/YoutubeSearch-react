import React, {Component} from 'react'
import VideoListItem from './video_list_item'

//no require State = > use func-based Component
const videoList = ({videos, onVideoSelect}) => { //props from index
    const videoItems = videos.map( (video) =>{
        return(
            <VideoListItem
            onVideoSelect = {onVideoSelect}
            key={video.etag} 
            video={video} />
        )
    });
    // console.log('Msg grom video_ist.js: '+ videoItems.length);

    return(
        <ul className='list-group' >
            {videoItems}
        </ul>
    )
}

export default videoList;