import React from 'react'

const HomeVideo = () => {
const imgRef=React.useRef()
const [videoSrc,setVideoSrc]=React.useState('')
const onVideoClick=()=>{
  imgRef.current.style.display='none'
  setVideoSrc('https://www.youtube.com/embed/uNT_AxXrUGs?autoplay=1')
  
}
  return (
    <div className='container'>
        <div className='home-video'>
          <div className='video-block'>
        <div class="ratio ratio-16x9">
          <iframe width="1440" height="648" src={videoSrc} title="YouTube video player" frameborder="0"  allowfullscreen></iframe>
          <img  ref={imgRef} classname="playButton" src="./img/playButton.svg" alt=""  onClick={()=>onVideoClick()}/>
        </div>
          </div>
 
        </div>
      </div>
  )
}

export default HomeVideo
