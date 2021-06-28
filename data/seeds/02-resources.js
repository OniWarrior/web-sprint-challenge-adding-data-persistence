const resources =[
    {
        resource_name:"Laptop",
        resource_description:"Laptop to write code"
    },
    {
        resource_name:"Visual Studio",
        resource_description:"IDE that's used to write C++ apps"
    }
]

exports.resources= resources

exports.seed = function(knex){
    return knex('resources').insert(resources)
}