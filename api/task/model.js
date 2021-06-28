// build your `Task` model here
const db = require('../../data/dbConfig')


async function getTasks(){
    const retrieval = await db('tasks as ts')
    .leftJoin('projects as ps','ts.project_id','ps.project_id')
    .select('ts.task_id',
            'ts.task_notes',
             'ts.task_description',
             'ts.task_completed',
             'ps.project_name',
             'ps.project_description')
    .orderBy('ts.task_id','ASC')

    const formatData=[]

    retrieval.forEach(task=>{
        formatData.push({
            task_id:task.task_id,
            task_notes:task.task_notes,
            task_description:task.task_description,
            task_completed:task.task_completed ? true:false,
            project_name:task.project_name,
            project_description:task.project_description            
        })
    })

    return formatData
}


async function getTaskById(id){
    const retrieval = await db('tasks')    
    .select('task_id',
            'task_notes',
            'task_description',
            'task_completed',
            'project_id'
            )
    .where('task_id',id)
    
   

    return retrieval
}

function addTask(task){
    return db('tasks')
           .insert(task)
           .then((id)=>getTaskById(id))
}


module.exports={
    getTasks,
    addTask
}