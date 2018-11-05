const todos = [
    {
        text: 'Iron my shirts', 
        completed: false
    },
    {
        text: 'Wash the dishes', 
        completed: true
    },
    {
        text: 'Learn javascript', 
        completed: false
    },
    {
        text: 'Do some sport', 
        completed: true
    },
    {
        text: 'Play piano',
        completed: true
    }
]

const deleteTodo = function(todos, text){
    const index = todos.findIndex(function(item, index){
        return item.text.toLowerCase() === text.toLowerCase()
    })

    todos.splice(index, 1)
}


deleteTodo(todos, 'wash the dishes')
console.log(todos)