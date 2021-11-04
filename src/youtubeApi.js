import {useState, useEffect } from 'react';
import { YoutubeContainer, } from './youtubeApi.css.js'
import Thumbs from './Thumbs.js'
import SearchBar from './SearchBar.js'
import Video from './Video.js'

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
  const [videoMain, setVideoMain] = useState({
  "kind": "youtube#searchResult",
  "etag": "isbig-ny-i4xRnhymlHxxaz_QSM",
  "id": {
    "kind": "youtube#video",
    "videoId": "WQwn-0g168k"
  },
  "snippet": {
    "publishedAt": "2021-05-08T05:37:06Z",
    "channelId": "UCkF42R6amm5NyF14-cqoX6Q",
    "title": "Kumo Desu ga, Nani ka? Ending 2 Full 『Genjitsu Totsugeki Hierarchy』 Aoi Yuuki 【ENG Sub】",
    "description": "Song: 現実凸撃ヒエラルキー / Genjitsu Totsugeki Hierarchy ☯Album: 現実凸撃ヒエラルキー / Genjitsu Totsugeki Hierarchy ☯Artist: 悠木碧 / Aoi Yuki ☯Lyricist: ...",
    },
    "channelTitle": "Kirasa",
    "publishTime": "2021-05-08T05:37:06Z"
  }
);

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
   <SearchBar pesquisar={pesquisarNaApi}  />

      <div style={{display: 'flex'}}>
        <div style={{width: '100%'}}>
            <Video video={videoMain} />
         </div>
        <Thumbs videos={videos} select={setVideoMain} />
      </div>
   </YoutubeContainer>
 )
}

export default YoutubeApi;
