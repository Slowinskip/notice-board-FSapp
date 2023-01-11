import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Adsbox from '../../features/AdsBox/Adsbox'
import SearchBar from '../../features/SearchBar/SearchBar'
import { API_URL } from '../../../config'
import Loader from '../../features/Loader/Loader'

const Search = () => {
  // const { searchPhrase } = useParams()
  const [data, setData] = useState([])
  const [url, setUrl] = useState(API_URL + '/api/ads/search/')
  const [loading, setLoading] = useState(false)
  console.log(url)

  const searchAd = async (ad) => {
    setUrl(API_URL + '/api/ads/search/' + ad.search)

    console.log(ad.search)
    setLoading(true)

    const fetchData = async () => {
      fetch(url).then(async (res) => {
        if (res.status === 200) {
          const resultJson = await res.json()
          setData(resultJson)
          console.log(resultJson)
        }
      })

      setLoading(false)
    }

    fetchData()
  }

  return (
    <>
      {' '}
      <SearchBar action={searchAd} />
      {data.length == 0 && <h1>Something went wrong.Try again</h1>}
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
