import styled from 'styled-components';

const SearchContainer = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  background: var(--bg);
  margin-top: 30px;
  margin-bottom: 15px;
  border-radius: 12px;
  transition: 0.3s;
  position: relative;
  &:hover{
    box-shadow: 0 0 3px var(--primary);
  }
`
const SearchInput = styled.input`
  height: 100%;
  width: 500px;
  margin-right: 10px;
  color: white;
  border: none;
  background: rgba(0,0,0, 0.3);
  height: 100%;
  padding: 0 20px;
  transition: 0.3s;

`

const SearchButton = styled.button`
  text-align: center;
  line-height: 30px;
  height: 35px;
  position:absolute;
  top: 3px;
  width: 45px;
  background: rgb(0, 67, 167);
  border: solid 1px var(--primary);
  transition: 0.3s;
  border-radius: 15px;
  cursor: pointer;
  right:20px;
  &:hover{
    background: white;
  }

`
export { SearchContainer, SearchInput, SearchButton };
