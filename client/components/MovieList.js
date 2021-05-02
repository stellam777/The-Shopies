import React from 'react'
import SingleMovie from './SingleMovie'

const MovieList = ({movieResults, setNominationList, nominationList}) => {
  return (
    <div className="col">
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
          />
        )
      })}
    </div>
  )
}

export default MovieList
