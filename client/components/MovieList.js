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
    <div className="col">
      {movieResults.length > 0 && (
        <button onClick={clearSearch} className="btn btn-warning">
          Clear Search Results
        </button>
      )}
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
