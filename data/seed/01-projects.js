const projects =[
    {
      project_name: "Base Number Conversion",
      project_description:"Convert a value from one base to another",
      project_completed: 0
     },
     {
      project_name: "C++ Calculator",
      project_description:"Create a calculator using C++",
      project_completed: 1
     }
]

exports.projects = projects

exports.seed= function(knex){
  return knex('projects').insert(projects)
}

