const tasks=[
    {
        task_description:"Write user-defined function for base conversion",
        task_notes:"Will use function template for task",
        task_completed:1,
        project_id:1
    },
    {
        task_description:"Write functions and algorithms for individual math operations",
        task_notes:"will use functions from previous project to achieve task",
        task_completed:0,
        project_id:2
    }

]

exports.tasks = tasks

exports.seed = function(knex){
    return knex('tasks').insert(tasks)
}