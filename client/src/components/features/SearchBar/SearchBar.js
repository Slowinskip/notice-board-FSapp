import React from 'react'
import styles from './SearchBar.module.scss'
import { Link } from 'react-router-dom'

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" />
      <Link to="/searchresult">
        <button className={styles.button}>Search</button>
      </Link>
    </div>
  )
}

export default SearchBar
