const EventEmitter = require('events');

// eventEmitter object.
const eventEmitter = new EventEmitter();

// WHen an event tutorial is emitted, we file up the function we defined.
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log("EVent has occured",num1+num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    //This is basically an event.
    get name(){
        return this._name;
    }
}

let raghav = new Person('raghav');

//This is adding the event emitter.
raghav.on('name',()=>{
    console.log("My name is "+raghav.name);
});

//Here, we are emitting.
raghav.emit('name');