/*
    Fetch existing todos from localStorage
*/
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON !== null) {
        return JSON.parse(todosJSON)
    }
    return []
}


/*
    Save todos to localStorage
*/
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


/*
    Render application todos based on filters
*/
const renderTodos = function (todos, filters) {   

    const filteredTodos = todos.filter(function (todo) {
        if(filters.hideCompleted && todo.completed) {
            return false
        }

        if(todo.text.toLowerCase().includes(filters.searchText.toLowerCase())) {
            return true
        }
    })

    const incompleteTodos = filteredTodos.filter(function (todo){
        return ! todo.completed
    })
    
    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}


/*
    Get the DOM elements for an individual todo
*/
const generateTodoDOM = function (todo) {
    const paragraph = document.createElement('p')
    paragraph.textContent = todo.text
    return paragraph
}


/*
    Generate the DOM elements for list summary
*/
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}


