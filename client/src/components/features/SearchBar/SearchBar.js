import React, { useState } from 'react'
import styles from './SearchBar.module.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../../../redux/usersRedux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const SearchBar = () => {
  const user = useSelector(getUser)
  const [search, setSearch] = useState()

  return (
    <div className={styles.container}>
      <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variant="primary" as={Link} to={'/search/' + search}>
            Search
          </Button>
        </Form>
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
