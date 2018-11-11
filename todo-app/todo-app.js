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

const filters = {
    searchText: '',
    hideCompleted: false
}

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

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
        const paragraph = document.createElement('p')
        paragraph.textContent = todo.text
        document.querySelector('#todos').appendChild(paragraph)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ''
})