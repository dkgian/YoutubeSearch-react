import React from 'react'

const VideoDetail = ({video})=>{
    if(!video){
        return(
            <div>
                <i className="fa fa-spinner fa-spin" 
                    style={{fontSize:'20px', marginTop: '10px', marginBottom:'10px'}} />
            </div>
        )
    }
    const videoId = video.id.videoId;
    // const videoUrl = 'https://youtube.com/embed/' + videoId;
    const videoUrl = `https://youtube.com/embed/${videoId}`; //es6
    const title = video.snippet.title;
    const description = video.snippet.description;

    return (
        <div className='video-detail' >
            <div className = 'embed-responsive embed-responsive-16by9' >
                <iframe className = 'embed-responsive-item'
                        src= {videoUrl} 
                        allowFullScreen >
                </iframe>
            </div>
            <div className = 'details'>
                <div className = 'title'> {title} </div>
                <div className = 'description'> {description} </div>
            </div>
        </div>
    )
}

export default VideoDetail


