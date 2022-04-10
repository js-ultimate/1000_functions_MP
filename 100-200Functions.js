 // 100
 function callOtherFuncion(nameOfFunction) {
    console.log("Wywołuję inną funkcję, którą mam jako paramter");

    const randomNumber1 = 10;
    const randomNumber2 = 20;
    nameOfFunction(randomNumber1, randomNumber2)
}
// console.log(callOtherFuncion(evaluateToP4ngram))

let stairs = {
    step: 0,
    up: function () {
        this.step += 1;
    },
    down: function () {
        this.steo -= 1;
    },
    view: function () {
        // console.log(this.step)
    }
};
// 103
class Tree {
    constructor(type) {
        this.type = type;
    }
    bloom() {
        // console.log(this.type, "I am blooming!")
    }
}

// 104
Tree.prototype.bloom = function () {
    //console.log(this.type, "I am blooming!");
}

// 105
var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1)
};
// console.log(fac(10));

// 106
function map(f, a) {
    var result = [],
        i;
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result
}
// console.log(map(10, 20))

// 107
map(function (x) {
    return x * x * x
});
// console.log(map(42))

// 108 
var newFunc;
if (num === 0) {
    newFunc = function (theObject) {
        theObject.make = "Coca-Cola"
    }
}
// console.log(newFunc(0))

// 109
function factorial(n) {
    if ((n === 0) || (n === 1))
        return 1;
    else
        return (n * factorial(n - 1));
}
// console.log(factorial(42))

// 110
function getResult(name, score) {

    function add() {
        return name + "scored" + score;
    }
    return add();
}
// console.log(getResult('Adam', 42))

// 113
function loop(x) {
    if (x >= 10)
        return loop(x + 1);
}
// console.log(loop(10))
function treeScan(node) {
    if (node == null)
        return;
    else
        for (var i = 0; i < node.childNodes.length; i++) {
            treeScan(node.childNodes[i]);
        }
}

// console.log(treeScan())

// 115
function foo(i) {
    if (i < 0)
        return (`Liczba ${i} mniejsz od zero`);
    console.log('begins:' + i);
    foo(i - 1);
    console.log('ends' + i);

}
// console.log(foo(42))

// 116
function outside(x) {
    function inside(y) {
        return x + y;
    }
}
// console.log(outside(42))

// 118
function a(x) {
    function b(y) {
        function c(z) {
            console.log(x + y + z);
        }
    }
}
// console.log(a(42))

// 130
function outside() {
    var x = 10;
    function inside(x) {
        return x;
    }
    return inside;
}
// console.log(outside())

//132
var pet = function (name) {
    var getName = function () {
        return name;
    }
    return getName;
}
// console.log(function('Janusz'))

// 134
var setSex = function (newSex) {
    if (typeof newSex == "string" &&
        (newSex.toLowerCase() == "male" ||
            newSex.toLowerCase() == "female")) {
        sex = newSex;
    }
}
// console.log(function("male"))

// 135
function myConcat(separator) {
    var result = ""
    for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result
}
// console.log(myConcat(2));

// 137
function multiplyAdvanced(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}
// console.log(multiplyAdvanced(10, 42))

// 138
function multiplyNamedParameter(a, b = 1) {
    return a * b;
}
// console.log(multiplyNamedParameter(10))

// 139
function multiply(multiplier, ...List) {
    return List.map(x => multiplier * x);
}
// 142
const stringSplit = str => str
    .toLowerCase()
    .split('')
    .reduce((acc, char) => (acc + ({ x: 1, o: -1 }[char] || 0)), 0) === 0
// console.log(stringSplit('Hejo, co tam'))

// 144
function Person() {
    this.age = 0;
    setInterval(function growUp() {
        this.age++;
    }, 1000);
}
// console.log(Person())

// 146
function showMessage(text) {
    if (text === undefined) {
        text = 'empty message'
    }
    alert(text)
}
// console.log(showMessage('cos tam'))

// 147
function showMessage2(text) {
    text = text || 'empty';
}
// console.log(showMessage2('cos tam 2'))

// 148
function showCount(count) {
    alert(count ?? "unknown");
}
// console.log(showCount(42))

// 149
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Please provide permission from your parents.")
    }
}
// console.log(checkAge(42))

// 150
let welcome = (age < 18) ?
    () => console.log("Baby") :
    () => console.log("Adult")
// console.log(welcome(42))

// 152
function CD(str) {
    str = str.toLowerCase();
    return (str.match(/c/g) || []).length === (str.match(/d/g) || []).length;
}
// console.log(CD('Ala ma kota'))

// 153
function something() {
    this.shape = "Triange",
        this.material = "Plastic",
        this.message = function () {
            console.log(this.material + this.shape + "id bad for environment")

            function inneroSomething() {
                console.log(this.shape);
            }
        }
    inneroSomething();
}
// console.log(something())

// 156
let argumentsRead = function (arguments) {
    console.log(arguments)
}
// console.log(argumentsRead('Duzo nauki przed nami'))

// 157
movieEntrance((age) => {
    if (age >= 12) {
        console.log("You can enter this movie")
    } else {
        console.log("You cannot enter this film")
    };
});
// console.log(movieEntrance(42))

// 158
function alphabeticalControl(str) {
    var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
    ];
    str = str.toLowerCase();
    for (var i = 0; i < alphabet.length; i++) {
        if (str.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }
    return true
}
// console.log(alphabeticalControl('Ala ma kota'))

// 159
function foo() {
    Promise.resolve().then(() => console.log(1));
    setTimeout(() => {
        console.log(2);
    });
    Promise.resolve().then(() => console.log(3));
    console.log(4);
}
foo();
// console.log(5);

// 162
const job1Ref = document.getElementById("job1");
const job2Ref = document.getElementById("job2");

const promise = new Promise((resolve, reject) => {
    const handleJob = () => {
        // console.log('it works 1')
        resolve()
        job1Ref.removeEventListener('click', handleJob);
    }

    job1Ref.addEventListener('click', handleJob);
})
// 163
promise.then(() => {
    job2Ref.addEventListener("click", () => {
        //console.log('it works')
    })
})

// 164
const driversArray = ['Nikkie_Lauda', 'Robert_Kubica', 'Michael_Schumacher', "Luis_Hammilton"]

const drivers = function drivers() {
    array.forEach(driver => {
        //console.log(`Jednym z najpopularniejszy kierowców formuły jeden jest ${driver}`)
    });
}

// 166 
function pangr$am(string) {
    let str = string.toLowerCase()
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < alpha.length; i++) {
        if (str.indexOf(alpha[i]) < 0) {
            return false
        }
    }
    return true
}
// console.log(pangr$am('Kub wygral na loterii'))
// 167 
const polishDriver = driversArray.filter(array => array.includes.driver('Robert_Kubica'));
function greetings(driver) {
    if (driver === 'Robert_Kubica') {
        //console.log('Jesteś najlepszym polskim kierowcą rajdowym')
    }
}
const englishDriver = driversArray.filter(array => array.includes.driver('Luis_Hamilton'));
function truth(driver) {
    if (driver === 'Luis_Hamilton') {
        //console.log('Vettel zawsze będzie lepszy')
    }
}
const germanDriver = driversArray.filter(array => array.includes.driver('Michael_Schumacher'));
function allTime(driver) {
    if (driver === 'Michael_Schumacher') {
        //console.log('Kierwoca wszechczasów')
    }
}
const finnishDriver = driversArray.filter(array => array.includes.driver('Nikkie_Lauda'));
function allTimeSecond(driver) {
    if (driver === 'Nikkie_Lauda') {
        // console.log('You are all time second driver')
    }
}
// 172
const AS = str => {
    let x = (str.match(/a|A/g) || []).length;
    let o = (str.match(/s|S/g) || []).length;
    return x === o;
}
// console.log(AS('Dawid był w synagodze'))

const animals = ['dog', 'elephant', 'lion', 'tiger', 'zebra', 'cheetah']

const fastestAnimals = []
// 173
function addAnimal(animal) {
    if (animal === 'cheetah') {
        fastestAnimals.push('cheetah')
    }
}
// console.log(addAnimal('cheetah'))

// 174
const bigAnimals = []


function biggestAnimal(animal) {
    if (animal === 'elephant') {
        bigAnimals.push('elephant')
    }
}
// console.log(biggestAnimal('elephant'))

// 175
const friendlyAnimals = []

function animalFriend(animal) {
    if (animal === 'dog') {
        friendlyAnimals.push('dog')
    }
}
// console.log(animalFriend('dog'))

// 176
const kingAnimals = []

function jungleKing(animal) {
    if (animal === 'lion') {
        kingAnimals.push('lion')
    }
}
// console.log(jungleKing('lion'))

// 177
const stripedAnimals = []

function jungleAnimal(animal) {
    if (animal === 'tiger' && animal === 'zebra') {
        stripedAnimals.push('tiger', 'zebra')
    }
}

function notFast(animal) {
    if (animal != 'cheetah') {
        //console.log('Na pewno nie jest to najszybsze zwierzę')
    }
}

function notBig(animal) {
    if (animal != 'elephant') {
        //console.log('Na pewno nie jest to najwięszke zwierzę')
    }
}


function notFriendly(animal) {
    if (animal != 'dog') {
        //console.log("Na pewno nie jest to najlepszy przyjaciel człowieka")
    }
}

function notJungleKind(animal) {
    if (animal != 'lion') {
        //console.log('Na pewno nie jest to król dżungli')
    }
}

function notStrippedAnimal(animal) {
    if (animal != 'tiger' && animal != 'Zebra') {
        //console.log('Na pewno nie jest to pasiaste zwierze')
    }
}
// 183

const cars = ['Marcedes', 'Fiat', 'Saab', 'Seat', 'AlfaRomeo', 'Audi']

const germanCars = []

function germanCarsAdd(car) {
    if (car == 'Merceds' && car === 'Audi') {
        germanCars.push('Mercedes', 'Audi')
    }
}

const italianCars = []

function pushItalianCars(car) {
    if (car == 'Fiat' && car == 'AlfaRomeo') {
        italianCars.push('Fiat', 'AlfaRomeo')
    }
}

const sweedishCars = []

function pushSweedishCars(car) {
    if (car === 'Saab') {
        sweedishCars.push('Saab')
    }
}

const spanishCars = []

function pushSpanishCars(car) {
    if (car === 'Seat') {
        spanishCars.push('Seat')
    }
}
// 187

function notGermanCars(car) {
    if (car != 'Mercedes' && car != 'Audi') {
        //console.log('Na pewno nie jest to niemiecki samochód')
    }
}

function notItalianCars(car) {
    if (car != 'Fiat' && car != 'AlfaRomeo') {
        //console.log('Na pewno nie jest to włoski samochód')
    }
}

function notSweedishCars(car) {
    if (car != 'Saab') {
        //console.log('Na pewno nie jest to szwedzki samochód')
    }
}

function notSpanishCars(car) {
    if (car != 'Seat') {
        //console.log('Na pewno nie jest to hiszpański samochód')
    }
}

function greet() {
    //console.log("Welcome")
}
setTimeout(() => {
    greet
}, 2000);

// 193
function loggedInUser() { };
function greetUser(userName) {
    //console.log('Welcome' + userName + '!');
}
setTimeout(() => {
    greet, loggedInUser
}, 2000);


function _clear_() {
    clearTimeout(timerId);
}

function generateOutput(aConcise) {
    if (aConcise)
        parent.generateConciseOutput();
    else
        parent.generateOutput();
}
window.setTimeout(() => {
    generateOutput
}, 1000, true);
