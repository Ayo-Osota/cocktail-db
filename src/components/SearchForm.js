import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchTerm, setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef(null);

  useEffect(() => {
    searchValue.current.focus();
  }, [])

  return (
    <div className='search'>
      <form action="search" className="search-form">
        <div className="form-control">
          <label htmlFor="search">search your favourite cocktail</label>
          <input type="text" name="search" id="search" ref={searchValue} 
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      </form>
    </div>
  )
}

export default SearchForm
