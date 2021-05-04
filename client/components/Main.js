import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useToasts} from 'react-toast-notifications'

import SearchInput from './SearchInput'
import MovieList from './MovieList'
import NominationList from './NominationList'
import Banner from './Banner'
import API_URL from '../../secrets.js'

const Main = () => {
  const {addToast} = useToasts()
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
      `https://www.omdbapi.com/?i=tt3896198&apikey=312d794d&type="movie"&s=${movieSearchTitle}`
    )

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
    if (data.Response === 'False') {
      addToast('Movie not found, please refine your search and try again', {
        appearance: 'error'
      })
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

  return (
    <div className="container mt-4">
      {nominationList.length === 5 && <Banner />}
      <SearchInput
        changeHandler={changeHandler}
        onKeyPress={onKeyPress}
        getMovies={getMovies}
        movieSearchTitle={movieSearchTitle}
      />
      <div className="row ml-0 mr-0 justify-content-center">
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
