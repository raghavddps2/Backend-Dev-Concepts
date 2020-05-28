const sum = (num1,num2) => num1+num2;

// We need to expose this function.

const PI = 3.14;
class SomeMathObject{

    constructor(){
        console.log("Object created");
    }
}

//How to expose all 3.
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;

//Another way to do this is simply this.
module.exports = {
    sum:sum,
    PI:PI,
    SomeMathObject:SomeMathObject
}