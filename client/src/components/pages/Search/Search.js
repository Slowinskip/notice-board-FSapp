import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllAds, updateAds } from '../../../redux/adsRedux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Adsbox from '../../features/AdsBox/Adsbox'
import SearchBar from '../../features/SearchBar/SearchBar'
import { API_URL } from '../../../config'
import Loader from '../../features/Loader/Loader'
import axios from 'axios'
import { logIn } from '../../../redux/usersRedux'

const Search = () => {
  const { searchPhrase } = useParams()
  const [data, setData] = useState([])
  const [url, setUrl] = useState(API_URL + '/api/ads/search/' + searchPhrase)
  const [loading, setLoading] = useState(false)
  console.log(data, url)
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      setUrl(API_URL + '/api/ads/search/' + searchPhrase)

      const result = await fetch(url)
      const resultJson = await result.json()
      setData(resultJson)
      setLoading(false)
    }

    fetchData()
  }, [searchPhrase])

  return (
    <>
      {' '}
      <SearchBar />
      {loading && <Loader />}
      {!loading && (
        <Row xs={1} md={3} className="g-3 ">
          {data.map((ad) => (
            <Col key={ad._id}>
              <Adsbox {...ad} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Search
