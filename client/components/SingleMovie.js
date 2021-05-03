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
    <div className="parent">
      <img src={poster} />
      <h3>{title}</h3>
      <p>{year}</p>
      {nominationList.some(movie => movie.id === id) &&
        !fromNomList && <p>Currently Nominated</p>}
      {!fromNomList && (
        <button
          className="btn btn-info"
          disabled={nominationList.some(movie => movie.id === id)}
          onClick={nominateMovie}
        >
          Nominate
        </button>
      )}
      {fromNomList && (
        <button className="btn btn-info" onClick={removeNominatedMovie}>
          Remove
        </button>
      )}
    </div>
  )
}

export default SingleMovie
