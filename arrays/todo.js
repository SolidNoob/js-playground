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

const sortTodos = function (todos) {
    return todos.sort(function (a, b){
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

const deleteTodo = function (todos, todoText){
    const index = todos.findIndex(function (item){
        return item.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))

//deleteTodo(todos, 'wash the dishes')
//console.log(todos)