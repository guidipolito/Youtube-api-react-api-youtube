import styled from 'styled-components'

const VideoThumbs = styled.div`
  background: var(--bg);
  display:flex;
  flex-direction: column;
  border-radius: 10px;
  width: 100%;
  min-height: 250px;
  text-align: center;
  margin-bottom: 30px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  & > figure {
    width: 100%;
    &> img{
      width: auto;
      height:auto;
      max-width: 100%;
    }
   }
  &:hover{
    transform: scale(1.1);
    box-shadow: 0 0 3px var(--primary);
  }
`
const VideoThumbsContainer = styled.div`
  width: 35%;
  max-width: 400px;
  @media(max-width: 1000px){
    width: 100%;
  }
`
export {  VideoThumbs, VideoThumbsContainer }
