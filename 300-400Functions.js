// 301
const zeroFuell = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft
};
// console.log(zeroFuell(10, 24, 42))
// 302
function malerAutoportret() {
    array.forEach(artist => {
        if (artist.genre.includes("autoportret")) {
            // console.log(artist + "malował autoportrety")
        }
    })
}
// 303
function malarzeAnimalisci() {
    array.forEach(artist => {
        if (artist.genre.includes("animalistyka")) {
            //console.log(artist + "był malarzem animalistą")
        }
    })
}
// 304
function malarzeBatalisci() {
    array.forEach(artist => {
        if (artist.genre.includes("batalistyka")) {
            //console.log(arist + "malował sceny batalistyczne")
        }
    });
}
// 305
function trueCheck(a, x) {
    var result = false;
    for (i = 0; i < a.length; i++) {
        if (a[i] == x) {
            result = true;
        }

    }
    return result;
};
// console.log(trueCheck(10, 42))
// 306
function exchanging(str) {
    return str.replace(/./g, c => c < "a" ? c.toLowerCase() : c.toUpperCase())
}
// 307
// console.log('Czasami nie')
function actPainter() {
    array.forEach(artist => {
        if (artist.genre.includes("akt")) {
            //console.log(artist + "malował również akty")
        }
    });
}
// 308
function religiousPainters() {
    array.forEach(artist => {
        if (artist.genre.includes("sceny religijne")) {
            //console.log(artist + "malował również sceny religijne")
        }
    });
}
// 309
function scenes() {
    array.forEach(artist => {
        if (artist.genre.includes("sceny rodzajowe")) {
            //console.log(artist + "malował sceny rodzajowe")
        }
    });
}
// 310
function nokturn() {
    array.forEach(artist => {
        if (artist.genre.includes("sceny rodzajowe")) {
            //console.log(artist + "malował nokturny")
        }
    });
}
// 311
function mitological() {
    array.forEach(artist => {
        if (artist.genre.includes("sceny mitologiczne")) {
            //console.log(artist + "malował sceny mitologiczna")
        }
    });
}
// 312
function malerzeGraficy() {
    array.forEach(artist => {
        if (artist.type.includes("grafika")) {
            //console.log(artist + "Tego artystę zaliczamy do grona grafików")
        }
    })
}
// 313
function checking(a, x) {
    return a.includes(x);
};
// console.lo(checking([1, 2, 3], 3))

// 314
function sculpture() {
    array.forEach(artist => {
        if (artist.type.inclued("rzeźba")) {
            //console.log(artist + "ten artysta był rzeźbiarzem")
        }
    });
}
// 315
function fuelLow(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump > mpg * fuelLeft) ? false : true;
}
// console.log(fuelLow(10, 55, 24))
// 316

function painting() {
    array.forEach(artist => {
        if (artist.type.includes("malarstwo")) {
            //console.log(artist + "to artyści malarze")
        }
    });
}
// 317
function fresk() {
    array.forEach(artist => {
        if (artist.type.includes("fresk")) {
            //console.log(artist + " :artyści tworzący freski")
        }
    })
}
// 318
function painting() {
    array.forEach(artist => {
        if (artist.type.includes("rysunek")) {
            //console.log(artist + " :artysta tworzący rysunki")
        }
    })
}
// 319
function akwarela() {
    array.forEach(artist => {
        if (artist.type.includes("akwarela")) {
            //console.log(artist + " : artysta tworzący w technica akwarela")
        }
    });
}
// 320
function OE(str) {
    let countX = countStr(str, 'O');
    let countO = countStr(str, 'E');
    return countX === countO;
}
// console.log(OE('maly piesek'))
// 321
function countStr(s, match) {
    let regex = new RegExp(match, "gi");
    return (s.match(regex) || []).length;
}
// 322
function architecture() {
    array.forEach(artist => {
        if (artist.type.includes("architektura")) {
            //console.log(artist + ": był architektem")
        }
    });
}
// 323
function sculpture() {
    array.forEach(artist => {
        if (artist.type.includes("rzeźba")) {
            //console.log(artist + " : był rzeźbiarzem")
        }
    })
}
// 324
function countingArrays(arrayOfItems) {
    var array = arrayOfItems.reduce((a, b) => a + (b === true ? 1 : 0), 0)
    return array;
}
// console.log(countingArrays([1, 2, 3, 4]))
// 325
function ilustracja() {
    array.forEach(artist => {
        if (artist.type.includes("ilustracja")) {
            //console.log(artist + " : był ilustratorem")
        }
    })
}
// 326
function ceramika() {
    array.forEach(artist => {
        if (artist.type.includes("ilustracja")) {
            //console.log(artist + ": był ilustratorem")
        }
    })
}
// 327
function period() {
    array.forEach(artist => {
        if (artist.period.includes("Renesans")) {
            //console.log(artist + " : artyści renesansowym")
        }
    })
}
// 328
function period2() {
    array.forEach(artist => {
        if (artist.period.includes("Barok")) {
            //console.log(artist + ": artysći barokowi")
        }
    })
}
// 329
function period3() {
    array.forEach(artist => {
        if (artist.period.includes("Romantyzm")) {
            //console.log(artist + ": artyści romantyzmu")
        }
    })
}
// 330
const countJourneys = arrayOfJourneys => arrayOfJourneys.filter(s => s).length;

// 331
function period4() {
    array.forEach(artist => {
        if (artist.period.includes("Ekspresjonizm")) {
            //console.log(artist + ": artyści ekspresjonizmu")
        }
    })
}
// 332
function period5() {
    array.forEach(artist => {
        if (artist.period.includes("Realizm")) {
            //console.log(artist + ": artyści realizmu")
        }
    })
}
// 333
function period6() {
    array.forEach(artist => {
        if (artist.period.includes("Manieryzm")) {
            //console.log(artist + ": artyści manieryzmu")
        }
    })
}
// 334
function period7() {
    array.forEach(artist => {
        if (artist.period.includes("Postimpresjonizm")) {
            //console.log(artist + ": artyści postimpresjonizmu")
        }
    })
}

// 335
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function (previousValue,
    currentValue, index, array) {
    return previousValue + currentValue;
})

// 336
var total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function (a, b) {
    return a + b;
});
// console.log(total)
// 337
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
    return a.concat(b);
});
//console.log(flattened)
let countMonkeys = x => x.filter(s => s).length;
// 338
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        if (arguments.length == 2) {
            value = arguments[1];
        } else {
            while (k < len && !(k in t)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
        }
        for (; k < len; k++) {
            if (k in t) {
                value = callback(value, t[k], k, t);
            }
        }
        return value;
    };
}
// 340
function tauchen(str) {

    return str.split('').map(item => item === item.toUpperCase()
        ? item.toLowerCase()
        : item.toUpperCase()).join('');
}
// console.log(tauchen('Pic piwo w wolny dzien'))

// 341
const quarterfinalistsTable = [];

function addition1() {
    quarterfinalistsTable.forEach(finalist => {
        quarterfinalistsTable.push();
    });
}

function alphabetCheck(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}
// console.log(alphabetCheck('Mateusz ma urodziny'))

// 342
const promise99 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ok"), 1000);
});

promise
    .then(res => {
        console.log(res);
        return res + "2";
    })
    .then(res => {
        console.log(res);
        return res + "3";
    })
    .then(res => {
        console.log(res);
    })


function checkDataA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("OK1"), 2000);
    });
}

function checkDataB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("OK2"), 2000);
    });
}

function checkDataC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("OK3"), 2000);
    });
}

// checkDataA()
//     .then(res => checkDataB())
//     .then(res => checkDataC())
//     .then(res => {
//         console.log(res);
//     });

// checkDataA()
//     .then(checkDataB)
//     .then(checkDataC)
//     .then(res => {
//         console.log(res);
//     });

// 355
function makeThings() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise, ");
        }, 2000);
    }).then(res => {
        return res + "first change"
    }).then(res => {
        return res + "second change"
    })
}

// makeThings()
//     .then(res => {
//         console.log("outside: ", res);
//     })


// 360
function CD(str) {
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == 'C') sum++;
        if (str[i].toLowerCase() == 'D') sum--;
    }
    return sum == 0;
}
// consoel.log(CD('Dawid lubi chodzi po gorach'))
// 362
function loadData(countryName) {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(`Http error: ${res.status}`);
            }
        })
}

// loadData("Brazil")
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     })


// 363
function concatFunction() {
    const samochody1 = ['Audi', 'BMW', 'Mercedes'];
    const samochody2 = ['Volvo', 'Mazda', 'Fiat']

    const samochody = samochody1.concat(samochody2);
    //console.log(`Utworzona tablica: ${samochody}`);
}
// 365
function liczbyFill() {
    const liczby = [1, 2, 3, 4, 5, 6, 7, 8];

    //console.log(`Tablica liczb: ${liczby}`);
    liczby.fill(4);
    //console.log(`Tablica liczb: ${liczby}`);

}

// 366
function counterOfDogs(arrayOfDogs) {
    var count = 0;

    arrayOfDogs.forEach(function (dog) {
        if (dog)
            count++;
    });

    return count;
}
// console.log(counterOfDogs(['sznaucer', 'retriever', 'bulldog']))

// 367
function tablicaLiczby() {
    const liczby = [1, 2, 3, 4, 5, 6, 7, 8];

    //console.log(`Tablica liczb: ${liczby}`);
    liczby.fill(4, 4);
    //console.log(`Tablica liczb: ${liczby}`);
    liczby.fill(2, 2, 5);
    //console.log(`Tablica liczb: ${liczby}`);
}

// 368
function carsFunction() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

    const small = samochody.filter(samochody => samochody.length <= 4);
    const large = samochody.filter(samochody => samochody.length > 4);

    //console.log(`Krotkie nazwy: ${small}`);
    //console.log(`Dlugie nazwy: ${large}`);
}

// 369
function liczbySearch() {
    const liczby = [4, 6, 9, 23, 56, 14, 75];
    const liczba = liczby.find(temp => temp > 15);

    //console.log(`Znaleziona liczba: ${liczba}`);
}

// 370
function carsValue() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];
    const valueOne = samochody.includes('BMW');
    const valueTwo = samochody.includes('Nissan');

    //console.log(`Czy element 'BMW' znajduje sie w tablicy? ${valueOne}`);
    //console.log(`Czy element 'Nissan' znajduje sie w tablicy? ${valueTwo}`);
}

// 371
function carsThrid() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

    //console.log(`Wypisywanie elementow przed okresleniem separatora: ${samochody}`);
    //console.log(`Wypisywanie elementow po okresleniu separatora: ${samochody.join('-')}`);
}

// 372
function numbersFunction() {
    const liczby = [4, 6, 9, 23, 56, 14, 75];

    //console.log(`Tablica glowna: ${liczby}`);
    const mapLiczby = liczby.map(temp => temp + 4);
    //console.log(`Nowa tablica: ${mapLiczby}`);
}

// 373
function sortFunction() {
    const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];
    const liczby = [4, 6, 9, 23, 56, 14, 75];

    samochody.sort();
    //console.log(`Posortowana tablica samochodow przy pomocy metody sort(): ${samochody}`);
    liczby.sort();
    //console.log(`Posortowana tablica liczb przy pomocy metody sort(): ${liczby}`);
}
// 374
function arrayOfSigns() {
    const tablicaZnakow = Array.from('Mercedes');

    //console.log(`Utworzona tablica: ${tablicaZnakow}`);
}

// 375
function search() {
    const samochod1 = {
        marka: 'Audi',
        model: 'A5',
        spalanie: 8
    };
    //console.log(samochod1.marka, samochod1.model, samochod1.spalanie);
}

// 376
function bicycleFunction() {
    const rower = new Object();
    rower.model = 'Kross';
    rower.rozmiarRamy = 'L';
    rower.rozmiarKola = 27.5;
    //console.log(rower.model, rower.rozmiarRamy, rower.rozmiarKola);
}

// 377
const toChangeSth = str => [...str].map(el => el[`to${el < 'a' ? 'Low' : 'Upp'}erCase`]()).join('')

// 378
function modelFunction() {
    function Smartfon(model, wyswietlacz, pamiec_ram) {
        this.model = model;
        this.wyswietlacz = wyswietlacz;
        this.pamiec_ram = pamiec_ram;
    }
    const smartfon = new Smartfon('Samsung Galaxy A32', 6.4, 4);
    //console.log(smartfon.model);
    //console.log(smartfon.wyswietlacz);
    //console.log(smartfon.pamiec_ram);
}

// 379
function prototypeWatch() {
    const zegarekPrototyp = {
        marka: 'Tommy Hilfiger',
        mechanizm: 'Kwarcowy',
        cena: 756
    }
    const zegarek = Object.create(zegarekPrototyp);
    //console.log(zegarek.marka);
    //console.log(zegarek.mechanizm);
    //console.log(zegarek.cena);
}

// 380
function seanumbers99() {
    const liczby = {
        liczba_1: 4,
        liczba_2: 8
    };

    //console.log(`Wartosc pierwszej zmiennej obiektu o nazwie liczby: ${liczby.liczba_1}`);
    //console.log(`Wartosc drugiej zmiennej obiektu o nazwie liczby: ${liczby.liczba_2}`);
}

// 381
function combinationOfStars(str) {
    return str.toLowerCase().split('*').length === str.toLowerCase().split('**').length;
}
// console.log(combinationOfStars('Kuba ma siostre Monike'))

// 382
function namesFunction() {
    const imiona = {
        kuba: 'Kuba',
        maciej: 'Maciej',
        bartek: 'Bartek'
    };

    //     console.log(`Wszystkie imiona obiektu o nazwie imiona:
    // -${imiona.kuba}
    // -${imiona.maciej}
    // -${imiona.bartek}`);
}

// 383
function counterSheep(arr) {
    return arr.filter(Boolean).length;
}
// counter.log(counterSheep([1, 2, 3, 4]))

// 384
function kowlaskiFunction() {
    const janKowalski = {
        imie: 'Jan',
        nazwisko: 'Kowalski',
        rok_urodzenia: 1987,
        miejscowosc: 'Warszawa',
        prawo_jazdy: true
    };

    //     console.log(`Dane osobowe: 
    // Imie: ${janKowalski.imie}
    // Nazwisko: ${janKowalski.nazwisko}
    // Rok urodzenia: ${janKowalski.rok_urodzenia}
    // Miejscowosc: ${janKowalski.miejscowosc}
    // Prawo jazdy: ${janKowalski.prawo_jazdy}`)
}

// 385

function numbers99() {
    const liczby = {
        liczba_1: 5,
        liczba_2: 15
    };

    const liczba = liczby.liczba_1 + liczby.liczba_2;
    // console.log(`${liczby.liczba_1} + ${liczby.liczba_2} = ${liczba}`);

}

// 386
const downFall = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === '-').length === str.filter(x => x === '^').length;
}
// console.log(downFall('downFall function'))

// 387
const exercise_1 = data.filter(station => !(Object.values(station).includes(null)));
//console.log(exercise_1)

// 388
const exercise_2 = data.map((stacja) => (stacja.kierunek_wiatru)).reduce((acc, cu) =>
    acc + cu) / data.length;
//console.log(exercise_2)

// 389
const exercise_3 = data.filter(stacja => stacja.cisnienie > 1030).map(stacja => stacja.temperatura);
//console.log(exercise_3)

// 390
const films = directors.flatMap(director => director.movies)
    .filter(movies => movies.distributor === "Warner Bros.")
    .map(movie => movie.title);
//console.log(films)

// 391
const thrillers = directors.filter(director => director.birth > 1960)
    .flatMap(director => director.movies)
    .filter(movie => movie.genre === "Thriller")
    .flatMap(movies => movies.title);
//console.log(thrillers)

// 392
const childern_name = directors.flatMap(director => director.children)
    .filter(name => name.startsWith("F"));
//console.log(childern_name)

// 393
const task_1 = coffeeShop.filter(location => location.street === "Długa"
    && location.city === "Kraków").map(coffeeShop => coffeeShop.name);
//console.log(task_1)

// 394
const taks_2 = coffeeShop.flatMap(coffeeShop => coffeeShop.coffee)
    .filter(coffeeShop => coffeeShop.coffee.includes("iceLatte")).length
//console.log(task_2)

// 395
const task_3 = coffeeShop
    .filter(coffeeShop => coffeeShop.coffeePrice[0].espresso > 10)
    .map(coffeeShop => coffeeShop.name);
// console.log(task_3)

// 396
const Earth = planets.filter(planet => planet.name === 'Earth')[0].relativeMass
const task1 = planets.filter(planet =>
    planet.relativeMass > Earth
    && planet.mostFamousMoons.some(moon => moon.startsWith('G')))
    .map(planet => planet.name);
// console.log(task1);

// 397
const averageMoons = planets.reduce((acc, planet) => acc + planet.moons, 0) / planets.length;
// console.log(averageMoons)
// 398
const result2 = planets.filter(planet => planet.moons > data).map(planet => planet.name);
//console.log(result2)

// 399
const result3 = planets.filter(planet => planet.hasPlanetaryRings === false && p.name.endsWith('s'))
    .map(planet => planet.name)
// console.log(result3)

// 400
const studios = games.filter(games => games.studio.startsWith('G')).map(game => game.title).join(', ');
// console.log(studios)
