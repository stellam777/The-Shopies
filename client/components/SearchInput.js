import React from 'react'

const SearchInput = ({
  changeHandler,
  onKeyPress,
  getMovies,
  movieSearchTitle
}) => {
  return (
    // <div className="form-group">
    //   <input
    //     placeholder="Search by movie title"
    //     autoComplete="off"
    //     type="text"
    //     name="search"
    //     className="form-control"
    //     onChange={changeHandler}
    //     value={movieSearchTitle}
    //     onKeyPress={onKeyPress}
    //   />
    //   <button onClick={getMovies} className="btn btn-info">
    //     Submit
    //   </button>
    // </div>
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
          <i style={{color: '#FE4A49'}} className="fa fa-search" />
        </button>
      </div>
    </div>
  )
}

export default SearchInput
