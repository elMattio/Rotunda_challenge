// Solution:

class Animal {

    constructor(sound) {
        this.sound = sound;
    };

    speak(phrase) {
        if(!phrase) return "";
        let words = phrase.split(" ").filter((word) => word !== "");
        let talk = words.reduce((prevWords, word) => `${prevWords} ${this.sound} ${word}`) + ` ${this.sound}`;
        return talk;
    };

    //Other methods and class members
};

class Lion extends Animal {

    constructor() {
        super("roar");
    };

    //Other methods and class members
};

class Tiger extends Animal {

    constructor() {
        super("grrr");
    };

    //Other methods and class members
};

class Dog extends Animal {

    constructor() {
        super("woff");
    };

    //Other methods and class members
};

class Cat extends Animal {

    constructor() {
        super("meow");
    };

    //Other methods and class members
};

// Tests:

const lion = new Lion();
console.log("Test 1:");
console.log(lion.speak("hi brave lion"));
console.log("-------------------------------");
// Expected output: "hi roar brave roar lion roar"

const tiger = new Tiger();
console.log("Test 2:");
console.log(tiger.speak("you are a giant kitten"));
console.log("-------------------------------");
// Expected output: "you grrr are grrr a grrr giant grrr kitten grrr"

const dog = new Dog();
console.log("Test 3:");
console.log(dog.speak("I like eat anything"));
console.log("-------------------------------");
// Expected output: "I woff like woff eat woff anything woff"

const cat = new Cat();
console.log("Test 4:");
console.log(cat.speak("I wanna be a lion"));
console.log("-------------------------------");
// Expected output: "I meow wanna meow be meow a meow lion meow"