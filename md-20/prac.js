// Conversion of °C to °F :
// function convertCelsiusToFahrenheit(degree){
//      const fahrenheit = degree * (9/5) + 32;
//      return fahrenheit;
// };
// const scale = 37;
// const theScale = convertCelsiusToFahrenheit(scale);
// console.log(theScale.toFixed(1));


// Conversion of °F to °C :
function convertFahrenheitToCelsius(degree){
    const celsius =  (5/9)* (degree - 32);
    return celsius;
};
const scale = 98.6;
const theScale = convertFahrenheitToCelsius(scale);
console.log(theScale.toFixed(1));