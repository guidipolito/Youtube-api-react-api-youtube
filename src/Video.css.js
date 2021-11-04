import styled from 'styled-components'

const VideoContainer = styled.div`
  width:calc(100% -10px);
  background: var(--bg);
  min-height: 500px;
  margin-right:15px;
  border-radius: 21px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &>figure{
    flex: 1;
    height: 300px;
    &>iframe{
      width:100%;
      height: 650px;
    }
  }
  &>div{
    padding:15px;
  }

`
export {VideoContainer}
