import {useState} from 'react'
import { SearchContainer, SearchInput, SearchButton } from './SearchBar.css.js'

function SearchBar(props){
  const [search, setSearch] = useState('')

  const onChangeHandler = e => {
    setSearch(e.target.value)
  }

  const onKeyUpHandler = e =>{
    e.key=='Enter' && props.pesquisar(search)
  }

  return (
    <SearchContainer>
      <span style={{position:'relative'}}>
      <SearchInput value={search} onChange={onChangeHandler} onKeyUp={onKeyUpHandler}/>
      <SearchButton onClick={()=>props.pesquisar(search)}>🔎</SearchButton>
      </span>
    </SearchContainer>
  );

}

export default SearchBar
