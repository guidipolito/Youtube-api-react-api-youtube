import {useState, useEffect } from 'react';
import { YoutubeContainer, VideoThumbs, VideoThumbsContainer } from './youtubeApi.css.js'
import SearchBar from './SearchBar.js'

//Lista usada para fornecer thumbs de videos qualquer quando acaba-se de entrar
const randomStuff = [
  'Never gonna give you up',
  'Lofi',
  '蜘蛛ですが、なにか ending 2',
  'dark souls meme',
  'Let it snow'
]

//Componente pai geral
function YoutubeApi(){
  const [videos, setVideos ] = useState(Array(1))

  const pesquisarNaApi = async (query) => {
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyBuT6Nk5WkeOXhoaFzhZlHWkInPZl9L85g&q="+query;
    const resp = await fetch(url);
    const data  = await resp.json();
    setVideos(data.items);
  }

  //Sorteia um assunto aleatorio
  useEffect( () => { pesquisarNaApi( randomStuff[Math.floor( Math.random() * randomStuff.length  )] ) }, [])


 return(
   <YoutubeContainer>
   <SearchBar pesquisar={pesquisarNaApi} />

      <div style={{display: 'flex'}}>
        <div style={{width: '100%'}}> </div>
        <VideoThumbsContainer>

          { videos && videos.map( item => {
            return(
              <VideoThumbs videoId={item.id.videoId}>
                <figure>
                  <img src={item.snippet.thumbnails.high.url} />
                </figure>
                <h3>{item.snippet.title}</h3>
              </VideoThumbs>
            )
          }) }
        </VideoThumbsContainer>
      </div>
   </YoutubeContainer>
 )
}

export default YoutubeApi;
