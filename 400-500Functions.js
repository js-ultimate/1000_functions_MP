// 401
const distinctGames = games.filter(game => game.platforms.lenght >= 2).map(game => game.title);
//console.log(distinctGames)

// 402
const titles = games.filter(game => !game.genre.includes('RPG') && game.year > 2015).map(game => game.title);
//console.log(titles)

// 403
const animalsFLat = animals.flatMap(animal => Object.values(animal)[0]);
// console.log(animalsFlat)

// 404
const carnivores = animalsFLat.filter(animal => animal.diet === 'Carnivore'
    && animal.habitat.includes('Grassland')).map(animal => animal.name)
//console.log(carnivores)

// 405
const animals2 = animalsFLat.filter(animal => animal.weightInKg > 1
    && animal.lifespanInYears >= 10).map(animal => animal.name);
//console.log(animals2)

// 406
const animal3 = animalsFLat.filter(animal => animal.diet === 'Carnivore'
    && animal.sizeInCm > 50)
    .map(animal => animal.name);
//console.log(animal3)

// 407
const driversMercedes = data.filter((driver) => driver.teams.includes('Mclaren'))
// console.log(driversMercedes)

// 408
const wins = data.reduce((acc, driver) => acc + driver.wins, 0)
    / driversMercedes.length
//console.log(wins)

// 409
const result22 = data.filter(driver => driver.wins === 0
    && driver.teams.length === 1)
    .map(driver => driver.name)

//console.log(result2)

// 410
const result33 = data.filter(driver =>
    driver.teams.includes('Renault') &&
    driver.wins >= 10)
    .map(driver => driver.name);

//console.log(result3)

// 411
const japanCars = data.filter(car => car.country === 'japan').map(car => [car.brand, car.year])
//console.log(japanCars)

// 412
const redCars = data.filter(car => car.colorway.includes('red')).map(car => car.brand)
//console.log(redCars)

// 413
const carbonCars = data.filter(car => car.colorway.includes('carbon') && car.year > 2001).map(car => [car.brand, car.country])
//console.log(carbonCars)

// 414
const akwarelaPejzaz = artists.filter(artist => artist.type.includes("akwarela") && artist.genre.includes("pejzaż")).map(artist => artist.artist);
//console.log(akwarelaPejzaz)

// 415
const polishArtists = artists.filter(artist => artist.country === "Polska").flatMap(artist => artist.genre);
//console.log(polishArtists)

// 416
const periods = artists.filter(arists => !arists.genre.includes("autoportret")).flatMap(artist => artist.period);
//console.log(periods)

// 417
[3, 1, 2].sort((a, b) => a - b);
[1, 2, 3].forEach(el => console.log(el));

// 418
function random(min, max, cb) {
    const nr = Math.floor(Math.random() * (max - min + 1) + min);
    cb(nr);
}
// console.log(10, 20, 34)

// 419
function render() {
    const lefr = parseInt(div.style.left) + 1;
    div.style.left = lefr + "px"
    requestAnimationFrame(render) // płynność animacji
}
// console.log(render())

// 420 ( ͡° ͜ʖ ͡°)
function generateCovers() {
    for (let i = 0; i < src.length; i++) {
        const img = document.createElement("img");
        img.classList.add("cover-book");
        img.src = src[i] + ".jpg";
        document.body.append(img)
    }
}
// console.log(generateCovers())

// 421
function magic({ a, a: { b } = {} } = {}) {
    //console.log(a, b)
}

// magic({ a: { b: 42 } })
// magic()

// 422
async function getCurrency(url) {
    const usd = await fetch(`${url}usd?format=json`)
    const euro = await fetch(`${url}eur?format=json`)


    const json = await Promise.race([usd, euro])

    const data = json.json()
    return data
}

// getCurrency('https://api.nbp.pl/api/exchangerates/rates/a/').then(e => console.log(e))

// 423
const loadFromLocalStorage = (one = false) => {
    const dataText = localStorage.getItem('userHappyNumbers');
    if (dataText !== null) {
        const data = JSON.parse(dataText);
        return one ? [data[data.length - 1]] : data
    }

    return []
};

// 424
const saveToLocalStorage = (data) => {
    if (!Array.isArray(data)) {
        data = [...loadFromLocalStorage(), data]
    }
    localStorage.setItem('userHappyNumbers', JSON.stringify(data))
}

// 425
const showResult = (resultRef) => {
    resultRef.innerText = loadFromLocalStorage(true);
}


// 426
const deleteFromLocalStorage = (one = false) => {
    saveToLocalStorage(loadFromLocalStorage().slice(0, -1));
}

// 427
const createTag = ({ tagName = 'div', tagAttrs, tagText, tagId, tagEvt, tagClass } = {}) => {
    const node = document.createElement(tagName);

    if (tagAttrs !== undefined) {
        tagAttrs.forEach(({ name, value }) => {
            node.setAttribute(name, value)
        });
    }

    if (tagClass !== undefined) {
        tagClass.forEach((name) => {
            node.classList.add(name);
        })
    }

    if (tagText !== undefined) {
        const nodeText = document.createTextNode(tagText);
        node.appendChild(nodeText)
    }

    if (tagId !== undefined) {
        node.id = tagId;
    }

    if (tagEvt !== undefined) {
        tagEvt.forEach(({ type, cb }) => {
            node.addEventListener(type, cb)
        })
    }

    return node;
}

const handleSave = (event, inputRef, resultRef) => {
    if (inputRef.value !== '') {
        saveToLocalStorage(inputRef.value);
        inputRef.value = '';
        showResult(resultRef)
    }
}

// 428
const handleDelete = (event, resultRef) => {
    deleteFromLocalStorage();
    showResult(resultRef);
}

// 429
function multiplyAdvaced(a, b) {
    if (!a || !b || typeof (a) != "number" || typeof (b) != "number") {
        return 0;
    }
    return a * b;
}
// console.log(multiplyAdvaced(10, 5))

// 430
const sumArray = (numbers) => (
    numbers && numbers.length > 1
        ? numbers
            .sort((a, b) => a - b)
            .slice(1, -1)
            .reduce((sum, number) => sum + number, 0)
        : 0
);
// console.log(sumArray([1, 2, 3, 4]))

// 431
function makeNegative(num) {
    return num <= 0 ? num : -num
}
// console.log(makeNegative(10))

// 432
function past(h, m, s) {
    return (h * 60 * 60 + m * 60 + s) * 1000;
}
// console.log(past(5, 4, 3))
// 433
const cockroachSpeed = s => Math.floor(s / 0.036);
function cockroachSpeed1(s) {
    return Math.floor(s * 30 / 1.08)
}
// console.log(cockroachSpeed(20))
// 434
const countDays = arrayOfDays => arrayOfDays.filter(x => x == true).length
// console.log(countDays())

// 435
function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
        if (n > 0) arr[0]++;
        if (n < 0) arr[1] += n;
        return arr;
    }), [0, 0];
}

//  436
function sumMix(x) {
    return x.map(a => +a).reduce((a, b) => a + b);
}

// 437
const reverseSeq = n => {
    let arr = [];
    for (let i = n; i > 0; i--) {
        arr.push(i);
    } return arr;
}
// console.log(reverseSeq(20))
// 438
function removeUrlAnchor(url) {
    return url.spli('#')[0];
}

// 439
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}
// console.log(42)

// 440
function minMax(arr) {
    var a = arr.sort(function (a, b) { return a - b });
    return [a[0], a[a.lenght - 1]];
}
// console.log(minMax([1, 2, 3, 4]))

// 441
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
// console.log(findNextSquare(20))


// 442
function array_diff(a, b) {
    return a.filter(function (x) { return b.indexOf(x) == -1; });
}
// console.log(array_diff(10, 20))

// 443
function highAndLow(numbers) {
    numbers = numbers.split(' ').sort((a, b) => Number(a) - Number(b))
    return [numbers[numbers.length - 1], numbers[0]].join(' ')
}
// console.log(highAndLow(10, 20))

// 444
function swap(str) {
    return str.split('').map(function (v) {
        return v.charCodeAt(0) > 96 ? v.toUpperCase() : v.toLowerCase();
    }).join('');
}
// console.log(swap('string jakistam'))

// 445
function spacify(str) {
    return str.split("").join(" ");
}
// console.log(spacify('cos tam cos tam'))

// 446
const validateWord = $ => {
    $ = [...$.toLowerCase()].reduce((acc, el) => {
        acc[el] = acc[el] + 1 || 1;
        return acc
    }, {})
    return [...new Set(Object.values($))].length === 1
}
// console.log(validateWord('word'))

// 447
function maxDiff(list) {
    if (!list.length) return 0;
    return Math.max(...list) - Math.min(...list);
}
// consoel.log(maxDiff([1, 2, 3, 4, 5]))

// 448
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}
// console.log(descendingOrder())

// 449 
function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });
    return numbers[0] + numbers[1];
};
// console.log(sumTwoSmallestNumbers(10, 20))

// 450
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
// console.log(duplicateEncode('word'))

// 451
function camelCase(str) {
    let res = [];
    for (var i = 0; i < str.length; i += 2) res.push(`${str[i] + (str[i + 1] || '_')}`)
    return res;
}
// console.log(cameCase('Mamy Jarka ma duży brzuch'))

// 452
const solve = arr => [...new Set(arr.reverse())].reverse()
// console.log(solve([1, 2, 3, 4, 5]))

// 453
function containAllRots(strng, arr) {
    return [...strng].map((_, i) => strng.substr(i) + strng.slice(0, i)).every(x => arr.includes(x));
}
// console.log(containAllRots('ala ma kota', []))

// 454
function nbDig(n, d) {
    var o = '';
    for (var i = 0; i <= n; i++) {
        o += Math.pow(i, 2);
    }
    return o.split(d).length - 1
}
// console log(nbDig(2, 4))

// 455
function countItems(arrayOfThings) {
    var num = 0;
    for (i = 0; i < arrayOfThings.length; i++) {
        if (arrayOfThings[i]) {
            num += 1;
        }
    }
    return num;
}
// console.log(countItems([1, 10, 22, 54, 42]))

// 456
const filterLongWords = (sentence, n) =>
    sentence.split(` `).filter(val => val.length > n);
// console.log(filterLongWords('zdanie ze słowami', 10))

// 457
var total = [0, 1, 2, 3].reduce(function (a, b) {
    return a + b;
});
// console.log(total)

// 458
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        // 'use strict';
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

// 459
function mojaFunkcja(x, y, z) { }
var argumenty = [0, 1, 2];
//console.log(mojaFunkcja.apply(null, argumenty));

// 460
function applyAndNew(constructor, args) {
    function partial() {
        return constructor.apply(this, args);
    };
    if (typeof constructor.prototype === "object") {
        partial.prototype = Object.create(constructor.prototype);
    }
    return partial;
}

// 461
function myConstructor() {
    //console.log("arguments.length: " + arguments.length);
    //console.log(arguments);
    this.prop1 = "val1";
    this.prop2 = "val2";
};

// 462
function fetchVideo() {
    controller = new AbortController();
    const signal = controller.signal;
    fetch(url, { signal })
        .then(function (response) {
            console.log('Download complete', response);
        })
        .catch(function (e) {
            console.log('Download error: ' + e.message);
        });
}
// 463
const stringReplacing = string => string.replace(/([A-Z])/g, ' $1');
// console.log(stringReplacing('Dawid ma kanape w pokoju'))

// 464
var min = function (list) {
    return Math.min(...list);
}
// console.log(min([10, 9, 8, 7, 6]))

// 465
var max = function (list) {
    return Math.max(...list);
}
// console.log(max([10, 9, 8, 7, 6]))

// 466
function findDifference(a, b) {
    let getA = a.reduce((a, b) => a * b)
    let getB = b.reduce((a, b) => a * b)

    return Math.abs(getA - getB)

}
// console.log(findDifference(10, 20))

// 467
function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    return [...new Set(newArr)].sort((a, b) => a - b)
}
// console.log([1, 2, 3], [4, 5, 6])

// 468
function calculateAge(birth, year) {
    if (birth - year === 1) {
        return `You will be born in 1 year.`
    } else if (birth - year > 1) {
        return `You will be born in ${Math.abs(year - birth)} years.`
    } else if (year - birth === 1) {
        return `You are 1 year old.`
    } else if (year - birth > 1) {
        return `You are ${year - birth} years old.`
    } else if (year - birth === 0) {
        return `You were born this very year!`
    }
}
// console.log(calculateAge(1998, 2022))

// 469
function getPlanetName(id) {
    var name;
    switch (id) {

        case 1:
            return 'Mercury'

        case 2:
            return 'Venus'

        case 3:
            return 'Earth'

        case 4:
            return 'Mars'

        case 5:
            return 'Jupiter'

        case 6:
            return 'Saturn'

        case 7:
            return 'Uranus'

        case 8:
            return 'Neptune'

    }

    return name;
}
// console.log(getPlanetName(5))

// 470
function testEven(n) {
    return (n % 2 == 0) ? true : false
}
//console.log(testEven(1));

// 471
function solution(a, b) {
    return (b.length > a.length) ? `${a}${b}${a}` : `${b}${a}${b}`
}
// console.log(solution(10, 20))

// 472
function move(pos, roll) {
    return pos + roll * 2
}
// console.log(move(10, 2))

function setAlarm(emp, vac) {
    return (emp == true && vac == false) ? true : false
}

//473
function checkForFactor(base, factor) {
    return (base % factor === 0) ? true : false
}
//console.log(checkForFactor(653, 7));

// 474
function unusualFive() {
    return ['a', 'a', 'a', 'a', 'a'].length
}
// console.log(unusualFive())

// 475
function getRealFloor(n) {

    if (n <= 0) {
        return n
    } else if (n < 13) {
        return n - 1
    } else if (n > 13) {
        return n - 2
    }
}

// console.log(getRealFloor(10))


// 476
function sumStr(a, b) {
    return (Number(a) + Number(b)).toString()
}
// console.log(sumStr(10, 20))

// 477
function powersOfTwo(n) {
    var result = [];
    for (var i = 0; i <= n; i++) {
        result.push(Math.pow(2, i));
    }
    return result;
}
// console.log(powersOfTwo(10))


// 478
function well(test) {

    let num = test.filter(a => a == 'good').length

    if (num > 0 && num <= 2) {
        return 'Publish!'
    } else if (num > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}
// console.log(well(42))


// 479
function pipeFix(num) {

    let arr = []
    let stop = num.pop()

    if (num == false) {
        return [2]
    } else {
        for (let i = num[0]; i <= stop; i++) {
            arr.push(i)
        }
        return arr
    }
}
// console.log(pipeFix(24))

// 480
function updateLight(cur) {

    if (cur == 'green') {
        return 'yellow'
    } else if (cur == 'yellow') {
        return 'red'
    } else if (cur == 'red') {
        return 'green'
    }

}
// console.log(updateLight('green'))

// 481
function combat(health, damage) {
    return (health - damage < 0) ? 0 : health - damage
}
// console.log(combat(99, 20))

// 482
function mouthSize(animal) {
    return (animal.toLowerCase() === 'alligator') ? "small" : "wide"
}
// console.log(mouthSize('Lion'))

// 483
function generateRange(min, max, step) {

    let arr = []

    for (i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}
// console.log(generateRange(10, 5, 2))

// 484
String.prototype.isUpperCase = function () {

    return this
        .split('')
        .map(a => (a == a.toUpperCase()) ? true : false)
        .includes(false) ? false : true

}
// console.log()

// 485
function index(arr, n) {
    return (arr.length <= n) ? -1 : Math.pow(arr[n], n)
}
// console.log(index([1, 2, 3, 4], 5))

// 486
function removeEveryOther(arr) {
    return arr.filter((a, i) => i % 2 == 0)
}
// console.log(removeEveryOther([25, 67, 82, 22]))

// 487
function strCount(str, letter) {
    return str.split('').filter(a => a == letter).length
}
// console.log(strCount('Ala ma kota', 'K'))

// 488
function twoSort(s) {
    return s.sort().shift().split('').map(a => a + '***').join('').slice(0, -3)
}
// console.log(twoSort('Mowilem to juz wczesniej'))

// 489
var find = function (string, array) {
    return (array.includes(string)) ? true : false
};
// console.log(find('Duzo wczesniej', 's'))

// 490
function hero(bullets, dragons) {
    return (bullets >= dragons * 2) ? true : false
}
// console.log(20, 10);

// 491
function DNAtoRNA(dna) {
    return dna.split('').map(a => a.replace('T', 'U')).join('')
}
// console.log(DNAtoRNA())

// 492
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld)
}
// console.log(twiceAsOld(45, 20))

// 493
function replace(str) {
    return str.replace(/[aeiouAEIOU]/gi, "!")
}
// console.log(replace('Magda poszla na ryby'))

// 494
function feast(beast, dish) {
    let beastL = beast.split('').pop()
    let dishL = dish.split('').pop()
    return (beast[0] == dish[0] && beastL == dishL) ? true : false
}

// console.log(feast('beast', 'dish'))

// 495
const quarterOf = (month) => {

    switch (month) {
        case 1:
        case 2:
        case 3:
            return 1;
            break;

        case 4:
        case 5:
        case 6:
            return 2;
            break;

        case 7:
        case 8:
        case 9:
            return 3;
            break;
        case 10:
        case 11:
        case 12:
            return 4;
            break;

        default:
            return 'not sure';

    }

}
// console.log(quarterOf(1));

// 496 
function howMuchILoveYou(n) {
    let arr = ['I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all']


    return (n % 6 == 0) ? 'not at all' : arr[n % 6 - 1]
}

// console.log(howMuchILoveYou(6));

// 497 

function getGrade(s1, s2, s3) {
    let arr = []
    arr.push(s1, s2, s3)
    let score = arr.reduce((a, b) => a + b) / 3

    switch (true) {
        case 90 <= score: return 'A'
        case 80 <= score: return 'B'
        case 70 <= score: return 'C'
        case 60 <= score: return 'D'
        case 0 <= score: return 'F'
    }
}
// console.log(getGrade(4, 4, 3));

// 498
function countBy(x, n) {
    arr = []
    for (i = x; i <= x * n; i += x) {
        arr.push(i)
    }
    return arr
}

// console.log(countBy(10, 15));

// 499 
function isDivideBy(num, a, b) {
    return (num % a == 0 && num % b == 0) ? true : false
}
// console.log(isDivideBy(20, 10, 20))

// 500 

function fakeBin(num) {
    return num.split('').map(a => (a >= 5) ? '1' : '0').join('')
}
// console.log(fakeBin(42));