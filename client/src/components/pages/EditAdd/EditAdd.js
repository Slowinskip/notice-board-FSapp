import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editAdRequest, getAdById } from '../../../redux/adsRedux'
import AdForm from '../../features/AdForm/AdForm'

const EditAdd = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const adId = useParams()
  const id = adId.id

  const adData = useSelector((state) => getAdById(state, id))

  const handleSubmit = (ad) => {
    console.log(ad.id)
    dispatch(editAdRequest({ ...ad, id }))
    // navigate('/')
  }
  return (
    <AdForm
      action={handleSubmit}
      actionText="Edit"
      price={adData.price}
      title={adData.title}
      localization={adData.localization}
      description={adData.description}
      date={adData.date}
      image={adData.image}
      phoneNumber={adData.user.phoneNumber}
      user={adData.user._id}
      id={id}
    />
  )
}

export default EditAdd
