import React from 'react'

const SearchInput = ({
  changeHandler,
  onKeyPress,
  getMovies,
  movieSearchTitle
}) => {
  return (
    <div className="form-group">
      <input
        placeholder="Search by Film Title"
        autoComplete="off"
        type="text"
        name="search"
        className="form-control"
        onChange={changeHandler}
        value={movieSearchTitle}
        onKeyPress={onKeyPress}
      />
      <button onClick={getMovies}>Submit</button>
    </div>
  )
}

export default SearchInput
