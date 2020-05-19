const tutorial = require('./tutorial');
console.log(tutorial); //This gives the function that is exported.
//In case, multiple values are sent, it will be an object that will contain all
//the functions that we require.

console.log(tutorial.sum(1,1)); // This is how we call the function.
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
