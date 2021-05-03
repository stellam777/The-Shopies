import React from 'react'
import SingleMovie from './SingleMovie'

const MovieList = ({
  movieResults,
  setNominationList,
  nominationList,
  setMovieResults
}) => {
  const clearSearch = () => {
    localStorage.setItem('Search Results', JSON.stringify([]))
    setMovieResults([])
  }

  return (
    <div className="col movie-list-container">
      <div className="d-flex justify-content-between">
        <div>
          <h4>Search Results:</h4>
        </div>
        <div>
          {movieResults.length > 0 && (
            <button onClick={clearSearch} className="btn btn-sm btn-secondary">
              Clear Search
            </button>
          )}
        </div>
      </div>
      {movieResults.map(movie => {
        return (
          <SingleMovie
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
            key={movie.imdbID}
            id={movie.imdbID}
            setNominationList={setNominationList}
            nominationList={nominationList}
            fromNomList={false}
            movieResults={movieResults}
          />
        )
      })}
    </div>
  )
}

export default MovieList
