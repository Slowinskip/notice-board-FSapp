import React from 'react'
import { useParams } from 'react-router-dom'

const Search = () => {
  const { searchPhrase } = useParams()
  console.log(searchPhrase)
  return <div>Search</div>
}

export default Search
