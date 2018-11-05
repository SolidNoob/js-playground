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

const lol = function (arr)
{
    arr.push('lol')
}

let myArr = ['foo', 'bar']
lol(myArr)
console.log(myArr)
console.log('----')


const findNote = function (notes, noteTitle) {
    return notes.find(function (note){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

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