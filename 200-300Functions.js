// 199
const doubleTimeout = "timeoutCondensed "
setTimeout(() => {
    setTimeout(() => {
        console.log('timeoutCondensed')
    }, 5000);
}, 50000);

const promise1 = newPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, timeout);
}, 2000);

promise1.then((value) => {
    console.log(value);
})

console.log(promise1)


const promise2 = newPromise((resolve, reject) => {
    setTimeout((function1) => {
        resolve("Success!")
    }, 30000);
})

promise2.then((successMessage) => {
    //console.log("Yay!" + successMessage)
})

// 207
'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Started (<small>Sync code started</small>)<br/>');

    let p1 = new Promise(
        (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise started (<small>Async code started</small>)<br/>');
            window.setTimeout(
                function () {
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );
    // 209
    p1.then(
        function (val) {
            log.insertAdjacentHTML('beforeend', val +
                ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
        })
        .catch(
            (reason) => {
                console.log('Handle rejected promise (' + reason + ') here.');
            });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>Sync code terminated</small>)<br/>');
}
// 210
const p4ngr4mat0r = string =>
    new Set(string.toLowerCase().replace(/[^a-z]/gi, ``)).size === 26;
// console.log(p4ngr4mat0r('Pisanie funkcji jest super'))
// 211
function BM(str) {
    if (str == "" || str == null) return true;
    str = str.toLowerCase();
    var list = str.split("");
    var xNum = 0;
    var oNum = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i] === 'B') {
            xNum++;
        }
        if (list[i] === 'M') {
            oNum++;
        }
    }
    if (xNum === oNum)
        return true;
    return false;
}
// console.log(BM('Funkcje javascript'));

// 212
function successCallback(result) {
    //console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
    //console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);


doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            //console.log('Got the final result: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

doSomething().then(function (result) {
    return doSomethingElse(result);
})
    .then(function (newResult) {
        return doThirdThing(newResult);
    })
    .then(function (finalResult) {
        //console.log('Gote the final result' + finalResult);
    })
    .catch(failureCallback);
// 220

doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .then(finalResult => {
        //console.log(`Gote the final result: ${finalResult}`);
    })
    .catch(failureCallback)
// 223 
new Promise((resolve, rejec) => {
    //console.log('Initial');

    resolve();
})
    .then(() => {
        throw new Error('Something failed');

        //console.log('Do this')
    })
    .catch(() => {
        // console.log('Do that');
    })

    .then(() => {
        //console.log('Do this no matter what happened before');
    });

// 227
try {
    const result1 = syncDoSomething();
    const newResult1 = syncDoSomethingElse(result);
    const finalResult = synDoThirdThing(newResult);
    //console.log(`Got the final result: ${finalResult}`);
} catch (error) {
    failureCallback(error);
}

async function foo() {
    try {
        const result1 = syncDoSomething();
        const newResult1 = syncDoSomethingElse(result);
        const finalResult = synDoThirdThing(newResult);
        //console.log(`Got the final result: ${finalResult}`);
    } catch (error) {
        failureCallback(error);
    }
}
// 229
function loweringAndReplace(string) {
    const str = string.replace(/[^a-zA-Z]/gi, '').toLowerCase()
    const set = new Set([...str]);
    return set.size === 26;
}
// console.log(loweringAndReplace('Janek pojechal na wakacje w gory'))

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10 * 1000).then(() => saySomething("10 seconds")).catch(failureCallback);


Promise.all([func1(), func2(), func3()]).then(([result, result2, result3]) => []);

[func1, func2, func3].reduce((p, f) => p.then(f), Promise.resolve())
    .then(result3 => { });

const applyAsync = (acc, value) => acc.then(val);
const composeAsync = (...funcs) => x => funcs.reduce(ApplyAsync, Promise.resolve(x));

Promise.resolve().then(() => console.log(2));
console.log(1);

const wait1 = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1);

// 243

const promise3 = new Promise(function (resolve, reject) {
    console.log("Promise Callback");
    resolve();
}).then(function (result) {
    // console.log("Promise Callback (.then)");
});

setTimeout(() => {
    // console.log("event-loop cycle: Promise (fulfilled)", promise)
}, 0);
// 247
console.log("Promise (pedning)", promise);

doSomethingCritical()
    .then(result => doSomethingOptional(result)
        .then(optionalResult => doSomethingExtraNice(optionalResult))
        .catch(e => { }))
    .then(() => moreCriticalStuff())
    .catch(e => console.error("Critical failure: " + e.message));

doSomething().then(function (result) {
    doSomethingElse(result)
        .then(newResult => doThirdThing(newResult));
}).then(() => doFourthThing());
// 253

doSomething().then(function (result) {
    return doSomethingElse(result);
})
    .then(newResult => doThirdThing(newResult))
    .then(() => doFourthThing())
    .catch(error => console.log(error));

// 257


const promise4 = new Promise((resolve, reject) => {
    if (successfully_completed) {
        resolve("Everyting OK")
    } else {
        reject("Not OK");
    }
});
// 258

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise/SetTimeout function");
    }, 1000);
});
// 259

function doAnything() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("SetTimeout nested in promise function");
        }, 1000);
    });
}
// 260
doAntyhing()
    .then(res => {
        console.log(res)
    });

// 261
function loadUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data")
        }, 2000);
    });
}

function loadBooks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Books data")
        }, 30000);
    });
}

function loadPets() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pets data");
        }, 10000);
    });
}

Promise.all([
    loadUser(),
    loadBooks(),
    loadPets()
])
    .then(res => {
        console.log(res);
    });
// stąd
const Promisse = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ok"), 1000);
})
// 265

Promisse
    .then(res => {
        //console.log(res);
        return res + "2"
    })
    .then(res => {
        //console.log(res);
        return res + "3"
    })
    .then(res => {
        //console.log(res);
    })
// 268 

doSomething1()
    .then(function (result) {
        return doSomethingElse1(result);
    })
    .then(newResult => doThirdThing1(newResult))
    .then(() => doFourthThing1())
    .catch(error => console.log(error))
// 272

function search() {
    function divisibilityByTwo(liczba) {
        if (liczba % 2 === 0) {
            //console.log(`Przekazana liczba(${liczba}) jest podzielna przez 2`);
        } else {
            //console.log(`Przekazana liczba(${liczba}) nie jest podzielna przez 2`);
        }
    }

    divisibilityByTwo(5);
}
// 274
function trybPralki(numerTrybu = 0) {
    switch (numerTrybu) {
        case 0:
            //console.log('Wybrano tryb: Szybkie pranie');
            break;
        case 1:
            //console.log('Wybrano tryb: Mieszane');
            break;
        case 2:
            //console.log('Wybrano tryb: Bawelna');
            break;
        case 3:
            //console.log('Wybrano tryb: Biale');
            break;
        case 4:
            //console.log('Wybrano tryb: Sportowe');
            break;
        default:
        //console.log('Nie ma takiego trybu!');
    }
}

trybPralki();
trybPralki(2);
trybPralki(5);
// 275

function promien(d) {
    return (d / 2);
}
// console.log(promien(4))
// 276
function poleKola() {
    const PI = 3.14;
    //console.log(`Pole kola o promieniu ${promien(8)} wynosi: ${PI * promien(8) * promien(8)}`);
}

poleKola();

// 277
function multiplication(a, b) {
    const a = 6, b = 9;
    //console.log(`Wynik mnozenia ${a} * ${b} = ${a * b}`);
}

// 278
function multiplication(a, b) {
    console.log(`Wynik mnozenia ${a} * ${b} = ${a * b}`);
}

//console.log(multiplication(5, 9));

// 279
const divisibilityByThree = function (liczba) {
if (liczba % 3 === 0) {
    //console.log(`Przekazana liczba(${liczba}) jest podzielna przez 3`);
} else {
    //console.log(`Przekazana liczba(${liczba}) nie jest podzielna przez 3`);
}
}

// 280
divisibilityByThree(15);

const cenaBiletu = function (cena_biletu, znizka = 0) {
if (znizka === 0) {
    //console.log(`Cena biletu normalnego wynosi: ${cena_biletu} PLN`);
} else if (znizka > 0 && znizka < 100) {
    //console.log(`Cena biletu ze znizka(${znizka}%) wynosi: ${cena_biletu - (cena_biletu * (znizka / 100))} PLN`);
} else {
    //console.log(`Podano bledna wartosc dla znizki`);
}
}

// cenaBiletu(56);
// cenaBiletu(71, 21);
// cenaBiletu(39, -5);

// 281
const PI = 3.14;


const arrowExchange = str =>
str.replace(/\w/g, val => val[`to${val < `a` ? 'Low' : 'Upp'}erCase`]());

// console.log(arrowExchange('Kolejna z funkcji'))
const polePodstawyStozka = function (promien) {
return PI * promien * promien;
}
// console.log(polePodstawyStozka(3))

const poleBoczneStozka = function (promien, dlugosc) {
return PI * promien * dlugosc;
}
// console.log(poleBoczneStozka(3, 10))

const poleCalkowiteStozka = function () {
//console.log(`Pole stozka wynosi: ${polePodstawyStozka(5) + poleBoczneStozka(5, 7)}`);
}

//poleCalkowiteStozka();

// 285
const print = () => {
//console.log('JavaScript ES6: funkcja strzalkowa');
}

//print();

// 286
const division = () => {
const a = 10, b = 4;
//console.log(`Wynik dzielenia ${a} / ${b} = ${a / b}`);
}

// division();

// 287
const division2 = (a, b) => {
//console.log(`Wynik dzielenia: ${a} / ${b} = ${a / b}`);
}

//division(15, 4);

// 288 
const divisibility = (liczba, dzielnik) => {
if (liczba % dzielnik === 0) {
    //console.log(`Przekazana liczba(${liczba}) jest podzielna przez ${dzielnik}`);
} else {
    //console.log(`Przekazana liczba(${liczba}) nie jest podzielna przez ${dzielnik}`);
}
}

// divisibility(7, 4);
// divisibility(20, 5);

// 289
const cenaBiletuu = (cena_biletu, rodzaj_znizki = 'normalny') => {
switch (rodzaj_znizki) {
    case 'normalny':
        //console.log(`Cena biletu normalnego: ${cena_biletu} PLN`);
        break;
    case 'studencki':
        //console.log(`Cena biletu ze znizka studencka(51%) wynosi: ${cena_biletu - (cena_biletu * 0.51)} PLN`);
        break;
    case 'seniora':
        //console.log(`Cena biletu ze znizka seniora(30%) wynosi: ${cena_biletu - (cena_biletu * 0.30)} PLN`);
        break;
    case 'weterana wojennego':
        //console.log(`Cena biletu ze znizka weterana wojennego(37%) wynosi: ${cena_biletu - (cena_biletu * 0.37)} PLN`);
        break;
    default:
    //console.log(`Nie ma takiej znizkki!`);
}
}

// cenaBiletu(32);
// cenaBiletu(32, 'studencki');
// cenaBiletu(32, 'weterana wojennego');

// 290
function pangramage(string) {
return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// console.log(pangramage('Dawid wygral samochod'))
// 291
const poleKwadratu = (bok) => {
return bok * bok;
}
// console.log(poleKwadratu(4))
// 292
const poleSzescianu = () => {
//console.log(`Pole szescianu wynosi: ${poleKwadratu(4) * 6}`);
}

//poleSzescianu();
// 293
function malarze() {
array.forEach(malarz => {
    if (artists.type.includes("malarstwo")) {
        //console.log("Wielki artysta to: " + malarz)
    }
});
}
// 295
const lowFuel = (distanceToPump, mpg, fuelLeft) => {
if (mpg * fuelLeft >= distanceToPump) {
    return true;
} else {
    return false;
}
};
// console.log(lowFuel(20, 10, 42));

// 296
function malarze2() {
array.forEach(artist => {
    if (artist in artists) {
        //console.log("Proszę zapamiętać tego artystę: " + artist)
    }
});
}
// 297
function malarzePejzaysci() {
array.forEach(artist => {
    if (artist.genre.includes("pejzaż")) {
        //console.log(artist + "Ten artysta zajmował się pejzażem")
    };
});
};
// 298
function even_or_odd(number) {
return number % 2 ? "Odd" : "Even"
}
// console.log(even_or_odd(42))
// 299
function martwaNatura() {
array.forEach(artist => {
    if (artist.genre.includes("martwa natura")) {
        //console.log(arists + "Tego malarza znamy z malowania martwej natury")
    }
})
}
// 300

function malujaPortret() {
array.forEach(artist => {
    if (artist.genre.includes("portret")) {
        //console.log(artist + "malował również portrety")
    }
})
}