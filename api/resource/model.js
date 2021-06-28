// build your `Resource` model here
const db = require('../../data/dbConfig')

async function getResources(){
    const retrieval = await db('resources')
    .select('resource_id',
            'resource_name',
             'resource_description')
    .orderBy('resource_id','ASC')

    const formatData=[]

    retrieval.forEach(resource=>{
        formatData.push({
            resource_id:resource.resource_id,
            resource_name:resource.resource_name,
            resource_description:resource.resource_description
        })
    })

    return formatData
}

async function getResourceById(id){
    const retrieval = await db('resources')
    .select('resource_id',
            'resource_name',
            'resource_description'
            )
    .where('resource_id',id)
    
   
    return retrieval
}

function addResource(resource){
    return db('resources')
           .insert(resource)
           .then(([id])=>getResourceById(id))
}

module.exports={
    getResources,
    addResource
}
