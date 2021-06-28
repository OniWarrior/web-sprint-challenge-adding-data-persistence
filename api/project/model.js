// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects(){
    const retrieval = await db('projects')
    .select('project_id',
    'project_name',
    'project_description',
    'project_completed')
    .orderBy('project_id','ASC')

    const formatData=[]

    retrieval.forEach(project=>{
        formatData.push([{
            project_id:project.project_id,
            project_name:project.project_name,
            project_description:project.project_description,
            project_completed:project.project_completed ? true:false
        }])
    })
    return formatData
}

 async function findProjectById(id){
     const retrieval = await db('projects')
     .select('project_id',
             'project_name',
             'project_description',
             'project_completed')
     .where('project_id',id)
     
    

     return retrieval
 }


 function addProject(project){
    return db('projects')
           .insert(project)
           .then(([id])=>findProjectById(id))
}

module.exports={
    getProjects,
    addProject
}


