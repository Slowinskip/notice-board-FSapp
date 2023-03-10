const express = require('express')
const router = express.Router()
const authMiddleware = require('../utils/AuthMiddleware')
const imageUpload = require('../utils/imageUpload')

const adsController = require('../controllers/ads.controller')

router.get('/ads', adsController.getAll)
router.get('/ads/:id', adsController.getById)
router.post(
  '/ads',
  authMiddleware,
  imageUpload.single('image'),
  adsController.post,
)
router.delete('/ads/:id', authMiddleware, adsController.delete)
router.put(
  '/ads/:id',
  authMiddleware,
  imageUpload.single('image'),
  adsController.edit,
)
router.get('/ads/search/:searchPhrase', adsController.searchPhrase)

module.exports = router
