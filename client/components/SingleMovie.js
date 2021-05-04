import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa'
import {GiStarsStack} from 'react-icons/gi'
import {useToasts} from 'react-toast-notifications'

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
  const {addToast} = useToasts()
  const nominatedAndOnSearchList = nominationList.some(movie => movie.id === id)

  const nominateMovie = () => {
    if (nominationList.length < 5) {
      let updatedNominationList = [...nominationList, {title, year, poster, id}]
      setNominationList(updatedNominationList)
      if (nominationList.length === 4) {
        addToast('You have 5 nominations now!', {appearance: 'success'})
      }
      localStorage.setItem(
        'Nominated Movies',
        JSON.stringify(updatedNominationList)
      )
    } else {
      addToast(
        "You've already nominated 5 movies and cannot nominate anymore",
        {appearance: 'error'}
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
        {poster !== 'N/A' && (
          <div className="col-lg-4 col-sm-12 poster-img-div">
            <img src={poster} className="moviePoster" />
          </div>
        )}
        <div
          className="col-lg-8 col-sm-12 pt-4 single-movie-text-div"
          style={{paddingLeft: poster === 'N/A' ? '15px' : '0'}}
        >
          <h3>{title}</h3>
          <p>Release Year: {year}</p>
          {nominatedAndOnSearchList &&
            !fromNomList && (
              <div className="stars">
                <GiStarsStack size={30} color="#fe4a49" />
                <p>Currently Nominated</p>
              </div>
            )}
          {!fromNomList && (
            <button
              className="btn btn-sm coral-button"
              type="button"
              disabled={nominatedAndOnSearchList}
              onClick={nominateMovie}
            >
              Nominate
            </button>
          )}
          {fromNomList && (
            <button
              className="btn btn-sm coral-button"
              type="button"
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
