import { API_URL } from '../config'

export const getAllAds = ({ ads }) => ads
export const getAdById = ({ ads }, id) => ads.find((ad) => ad._id === id)

const createActionName = (actionName) => `app/ads/${actionName}`
const UPDATE_ADS = createActionName('UPDATE_ADS')
const EDIT_AD = createActionName('EDIT_AD')

export const updateAds = (payload) => ({ type: UPDATE_ADS, payload })
export const editAd = (payload) => ({ type: EDIT_AD, payload })

const adsReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_ADS:
      return [...action.payload]
    case EDIT_AD:
      return statePart.map((ad) =>
        ad.id === action.payload.id ? { ...ad, ...action.payload } : ad,
      )
    default:
      return statePart
  }
}

export default adsReducer
