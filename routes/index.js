var express = require('express')
var router = express.Router()
let ApiClient = require('../client')

router.get('/*', function(req, res, next) {
  let client = new ApiClient
  client.request(req.url)
    .then((data) => {
      return res.send(data)
    })
})

module.exports = router
