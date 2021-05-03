import React from 'react'
import SingleMovie from './SingleMovie'

const NominationList = ({nominationList, setNominationList}) => {
  console.log('NOM LIST', nominationList)
  if (nominationList.length === 5) {
    alert('FIVE BITCH')
  }

  return (
    <div className="col">
      <h2>NOM NOM</h2>
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
