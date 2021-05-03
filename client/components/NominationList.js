import React from 'react'
import SingleMovie from './SingleMovie'

const NominationList = ({nominationList, setNominationList}) => {
  const clearSearch = () => {
    localStorage.setItem('Nominated Movies', JSON.stringify([]))
    setNominationList([])
  }

  return (
    <div className="col">
      {nominationList.length > 0 && (
        <button onClick={clearSearch} className="btn btn-warning">
          Clear Nominations
        </button>
      )}
      {nominationList.length > 0 && (
        <div>Nominations: {nominationList.length}</div>
      )}
      {nominationList.map(movie => {
        return (
          <SingleMovie
            title={movie.title}
            year={movie.year}
            poster={movie.poster}
            key={movie.id}
            id={movie.id}
            setNominationList={setNominationList}
            nominationList={nominationList}
            fromNomList={true}
          />
        )
      })}
    </div>
  )
}

export default NominationList
