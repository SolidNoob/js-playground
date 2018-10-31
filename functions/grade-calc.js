let calculateGrade = function(score, maximum){
    let percentage = score / maximum * 100
    
    let grade = '' 
    if(percentage <= 59) {
        grade = 'F'
    } else if(percentage <= 69){
        grade = 'D'
    } else if(percentage <= 79) {
        grade = 'C'
    } else if(percentage <= 89) {
        grade = 'B'
    } else {
        grade = 'A'
    }

    return `${score}/${maximum} -> You got a ${grade} (${percentage}%)!`
}

let result = calculateGrade(15, 20) 
console.log(result)