let square = function(number) {
    return number * number 
}

result = square(3)
console.log(result)


let convertFahrenheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

celsius = convertFahrenheitToCelsius(32)
console.log(celsius)

celsius = convertFahrenheitToCelsius(60)
console.log(celsius)