// build your `/api/projects` router here
const Project = require('./model')
const express = require('express')

const router = express.Router()

router.get('/',(req,res,next)=>{
    Project.getProjects()
    .then(projects=>{
        
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/',(req,res,next)=>{
    const project = req.body

    Project.addProject(project)
    .then(postProject =>{
        res.status(201).json(postProject)
    })
    .catch(next)
})

module.exports = router
