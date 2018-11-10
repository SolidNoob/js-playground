const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    }, 
    {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better'
    }, 
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]


const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {    
    query = query.toLowerCase()
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query)
        const isBodyMatch = note.body.toLowerCase().includes(query)

        return  isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes, 'ex'))

/*
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}
*/

const note = findNote(notes, 'Habbits to work on')
console.log(note)