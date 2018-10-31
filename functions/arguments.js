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
    let percent = percentage * 100
    let tip = total * percentage
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(80, 0.5)
console.log(tip)

tip = getTip(120, 0.1)
console.log(tip)