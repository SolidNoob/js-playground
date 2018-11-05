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

const deleteTodo = function(todos, todoText){
    const index = todos.findIndex(function(item){
        return item.text.toLowerCase() === todoText.toLowerCase()
    })

    if(index > -1) {
        todos.splice(index, 1)
    }
}


deleteTodo(todos, 'wash the dishes')
console.log(todos)