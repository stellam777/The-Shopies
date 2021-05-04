import React from 'react'

const SearchInput = ({
  changeHandler,
  onKeyPress,
  getMovies,
  movieSearchTitle
}) => {
  return (
    <div className="input-group mt-4 mb-2">
      <input
        placeholder="Search by movie title"
        autoComplete="off"
        type="text"
        name="search"
        className="form-control"
        onChange={changeHandler}
        value={movieSearchTitle}
        onKeyPress={onKeyPress}
      />
      <div className="input-group-append">
        <button onClick={getMovies} className="btn navy-button" type="button">
          <i style={{color: 'white'}} className="fa fa-search" />
        </button>
      </div>
    </div>
  )
}

export default SearchInput
