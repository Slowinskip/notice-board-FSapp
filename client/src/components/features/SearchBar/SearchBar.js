import React, { useState } from 'react'
import styles from './SearchBar.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../../../redux/usersRedux'
import Button from 'react-bootstrap/Button'

const SearchBar = ({ action }) => {
  const user = useSelector(getUser)
  const [search, setSearch] = useState()
  console.log(search)

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
        <Button
          as={Link}
          variant="primary"
          onClick={() => {}}
          to={'/search/' + search}
        >
          Add Ads
        </Button>
      </div>
      {user && (
        <div>
          <Button variant="primary" as={Link} to={'/addAds'}>
            Add Ads
          </Button>
        </div>
      )}
    </div>
  )
}

export default SearchBar
