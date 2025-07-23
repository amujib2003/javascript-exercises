const convertToCelsius = function(C) {

F = (C -32) * 5/9;
return +F.toFixed(1);

};

const convertToFahrenheit = function(F) {

C = (F * 9/5 + 32);
return +C.toFixed(1); 

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
