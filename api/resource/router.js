// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/',(req,res,next)=>{
    Resource.getResources()
    .then(resources=>{
        res.status(200).json(resources)
    })
    .catch(next)
})

router.post('/',(req,res,next)=>{
    const resource = req.body

    Resource.addResource(resource)
    .then(postResource=>{
        res.status(201).json(postResource)
    })
    .catch(next)
})

module.exports = router