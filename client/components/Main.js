import React, {useState, useEffect} from 'react'
import axios from 'axios'

import SearchInput from './SearchInput'
import MovieList from './MovieList'
import NominationList from './NominationList'

const Main = () => {
  const [movieSearchTitle, setMovieSearchTitle] = useState('')
  const [movieResults, setMovieResults] = useState([])
  const [nominationList, setNominationList] = useState([])

  const changeHandler = e => {
    setMovieSearchTitle(e.target.value)
  }

  const onKeyPress = e => {
    if (e.which === 13) {
      getMovies()
    }
  }

  const getMovies = async () => {
    let {data} = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=312d794d&s=${movieSearchTitle}`
    )
    console.log('DATA', data)
    if (data.Response === 'True') {
      setMovieResults(data.Search)
    }
    setMovieSearchTitle('')
  }

  useEffect(() => {
    if (localStorage.getItem('Nominated Movies') !== null) {
      setNominationList(JSON.parse(localStorage.getItem('Nominated Movies')))
    }
  }, [])

  return (
    <div className="container">
      <h1>Hello</h1>
      <SearchInput
        changeHandler={changeHandler}
        onKeyPress={onKeyPress}
        getMovies={getMovies}
        movieSearchTitle={movieSearchTitle}
      />
      <div className="row">
        <MovieList
          movieResults={movieResults}
          setNominationList={setNominationList}
          nominationList={nominationList}
        />
        <NominationList
          nominationList={nominationList}
          setNominationList={setNominationList}
        />
      </div>
    </div>
  )
}

export default Main
