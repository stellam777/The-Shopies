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
    const apiKey = process.env.API_KEY
    let {data} = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=312d794d&type="movie"&s=${movieSearchTitle}`
    )
    console.log('DATA', data)
    if (data.Response === 'True') {
      let filteredData = []
      data.Search.filter(movie => {
        let i = filteredData.findIndex(x => x.imdbID === movie.imdbID)
        if (i <= -1) {
          filteredData.push(movie)
        }
      })
      setMovieResults(filteredData)
      localStorage.setItem('Search Results', JSON.stringify(filteredData))
    }
    setMovieSearchTitle('')
  }

  useEffect(() => {
    if (localStorage.getItem('Nominated Movies') !== null) {
      setNominationList(JSON.parse(localStorage.getItem('Nominated Movies')))
    }
    if (localStorage.getItem('Search Results') !== null) {
      setMovieResults(JSON.parse(localStorage.getItem('Search Results')))
    }
  }, [])
  //if clear results and have nom then don't clear nom
  let test = !movieResults.length && nominationList.length

  return (
    <div className="container mt-4">
      <SearchInput
        changeHandler={changeHandler}
        onKeyPress={onKeyPress}
        getMovies={getMovies}
        movieSearchTitle={movieSearchTitle}
      />
      <div className="row ml-0 mr-0">
        <MovieList
          movieResults={movieResults}
          setMovieResults={setMovieResults}
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
