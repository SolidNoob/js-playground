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
document.querySelector('button').addEventListener('click', function (e){
    console.log('clicked')
})