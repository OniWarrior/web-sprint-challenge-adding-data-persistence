// build your `/api/tasks` router here
const Task = require('./model')
const express = require('express')

const router = express.Router()

router.get('/',(req,res,next)=>{
    Task.getTasks()
    .then(tasks=>{
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/',(req,res,next)=>{
    const task= req.body

    Task.addTask(task)
    .then(postTask =>{
       
        res.status(201).json(postTask)
    })
    .catch(next)
})

module.exports = router