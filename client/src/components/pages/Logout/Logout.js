import React from 'react'
import { API_URL } from '../../../config'
import { logOut } from '../../../redux/usersRedux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const options = {
      method: 'DELETE',
      credentials: 'include',
    }

    fetch(`${API_URL}/auth/logout`, options)
      .then(() => {
        dispatch(logOut())
        setTimeout(() => {
          navigate('/')
        }, 3000)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch])

  return null
}

export default Logout
