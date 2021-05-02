import React, {useState} from 'react'

const SingleMovie = ({
  title,
  year,
  poster,
  setNominationList,
  nominationList,
  id
}) => {
  let nominatedHelper = false
  const [nominated, setNominated] = useState(false)
  console.log('FROM SINGLE MOVIE', nominationList)
  const nominateMovie = () => {
    nominatedHelper = !nominatedHelper
    setNominated(!nominated)
    console.log('FROM NOMINATED', nominatedHelper)
    if (nominatedHelper) {
      let updatedNominationList = [...nominationList, {title, year, poster, id}]
      setNominationList(updatedNominationList)
      console.log('hi from nom')
    }
  }

  const removeNominatedMovie = () => {
    nominatedHelper = !!nominatedHelper
    setNominated(!nominated)
    console.log('REMOVE NOMINATED', nominatedHelper)
    if (!nominatedHelper) {
      let updatedNominationList = nominationList.filter(
        movie => movie.id !== id
      )
      setNominationList(updatedNominationList)
      console.log('hi from UNnom')
    }
  }

  console.log('NOM LIST AFTER BTN CLICK IN SINGLE MOVIE', nominationList)

  return (
    <div>
      <img src={poster} />
      <h3>{title}</h3>
      <p>{year}</p>
      {!nominated && (
        <button className="btn btn-info" onClick={nominateMovie}>
          Nominate
        </button>
      )}
      {nominated && (
        <button className="btn btn-info" onClick={removeNominatedMovie}>
          Currently Nominated
        </button>
      )}
    </div>
  )
}

export default SingleMovie
