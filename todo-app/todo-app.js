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

const incompleteTodos = todos.filter(function (todo){
    return ! todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

incompleteTodos.forEach(function (todo) {
    const paragraph = document.createElement('p')
    paragraph.textContent = todo.text
    document.querySelector('body').appendChild(paragraph)
})

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function (e){
    console.log('clicked')
})

// Listen for new todo text change
document.querySelector('#new-todo-text').addEventListener('input', function (e){
    console.log(e.target.value)
})