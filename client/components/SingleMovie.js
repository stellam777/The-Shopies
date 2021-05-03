import React, {useState} from 'react'

const SingleMovie = ({
  title,
  year,
  poster,
  setNominationList,
  nominationList,
  id,
  fromNomList,
  movieResults
}) => {
  const nominateMovie = () => {
    if (nominationList.length < 5) {
      let updatedNominationList = [...nominationList, {title, year, poster, id}]
      setNominationList(updatedNominationList)
      localStorage.setItem(
        'Nominated Movies',
        JSON.stringify(updatedNominationList)
      )
    }
  }

  const removeNominatedMovie = () => {
    let updatedNominationList = nominationList.filter(film => film.id !== id)
    setNominationList(updatedNominationList)
    localStorage.setItem(
      'Nominated Movies',
      JSON.stringify(updatedNominationList)
    )
  }

  return (
    <div className="mt-4">
      <div className="row mt-4 mb-2 underline">
        <div className="col-4">
          <img
            src={poster}
            style={{
              objectFit: 'cover',
              width: '125px',
              height: '200px',
              borderRadius: '5px'
            }}
          />
        </div>
        <div className="col-8 pl-0 pt-4">
          <h3>{title}</h3>
          <p>Release Year: {year}</p>
          {nominationList.some(movie => movie.id === id) &&
            !fromNomList && <p>Currently Nominated</p>}
          {!fromNomList && (
            <button
              className="btn btn-sm coral-button"
              disabled={nominationList.some(movie => movie.id === id)}
              onClick={nominateMovie}
            >
              Nominate
            </button>
          )}
          {fromNomList && (
            <button
              className="btn btn-sm coral-button"
              onClick={removeNominatedMovie}
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleMovie
