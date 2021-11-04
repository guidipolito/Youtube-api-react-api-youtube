import { VideoThumbs, VideoThumbsContainer } from './Thumbs.css.js';

function Thumbs(props){
  const {videos} = props

  return(
    <VideoThumbsContainer>

      { videos && videos.map( item => {
        return(
          <VideoThumbs videoId={item.id.videoId} onClick={()=>{props.select(item); console.log(item)} }>
            <figure>
              <img src={item.snippet.thumbnails.high.url} />
            </figure>
            <h3>{item.snippet.title}</h3>
          </VideoThumbs>
        )
      }) }

    </VideoThumbsContainer>
  )
}

export default Thumbs
