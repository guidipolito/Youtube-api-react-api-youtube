import {VideoContainer} from './Video.css.js';
function Video(props){
  console.log(props)
  const video = props.video.snippet;
  return(
    <VideoContainer>
      <figure>
        <iframe width="1280" height="720" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay="1"></iframe>
      </figure>
      <div>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
        <p>Publicado em:{video.publishedAt}</p>
      </div>
    </VideoContainer>
  )
}

export default Video
