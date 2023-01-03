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

const Search = () => {
  const { searchPhrase } = useParams()
  console.log(searchPhrase)
  const dispatch = useDispatch()
  const ads = useSelector(getAllAds)
  const [pending, setPending] = useState(false)
  console.log(pending)
  useEffect(() => {
    handleUpdate()
  })

  const handleUpdate = () => {
    setPending(true)
    fetch(API_URL + '/api/ads/search/' + searchPhrase).then((res) => {
      if (res.status === 200) {
        return res.json().then((ads) => {
          dispatch(updateAds(ads))
          setPending(false)
        })
      }
    })
  }

  console.log(ads)

  return (
    <>
      <SearchBar />
      {pending && <Loader />}
      {!pending && (
        <Row xs={1} md={3} className="g-3 ">
          {ads.map((ad) => (
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
