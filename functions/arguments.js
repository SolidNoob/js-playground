let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)




let getScoreText = function (name = 'bar', score = 16) {
    return 'Name: ' + name + ' - Score: ' + score 
}

let scoreText = getScoreText('foo', 15)
console.log(scoreText)



let getTip = function (total, percentage = 0.2){
    return total * percentage
}

let tip = getTip(80, 0.5)
console.log(tip)