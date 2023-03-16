import React from 'react'

const HomeVideo:React.FC = () => {
const imgRef=React.useRef<HTMLImageElement>(null)
const [videoSrc,setVideoSrc]=React.useState('')
const onVideoClick=()=>{
  if(imgRef.current){
  imgRef.current.style.display='none'
  setVideoSrc('https://www.youtube.com/embed/uNT_AxXrUGs?autoplay=1')
  }
  
}
  return (
    <div className='container'>
        <div className='home-video'>
          <div className='video-block'>
        <div className="ratio ratio-16x9">
          <iframe width="1440" height="648" src={videoSrc} title="YouTube video player" frameBorder="0"  allowFullScreen></iframe>
          <img  ref={imgRef} className="playButton" src="./img/playButton.svg" alt=""  onClick={()=>onVideoClick()}/>
        </div>
          </div>
 
        </div>
      </div>
  )
}

export default HomeVideo
