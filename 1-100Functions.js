// 1
function sumArray(array) {
    if (array == null) {
        return 0;
    } else if (array.length < 2) {
        return 0;
    } else {
        array = array.sort(function (a, b) { return a - b; });
        var total = 0;
        for (var i = 1; i < array.length - 1; i++) {
            total += array[i];
        }
        return total;
    }
}

// console.log(sumArray[1, 2, 3, 4, 5])

// 2
function change(str) {
    return str.split('').map(charSwap).join('');
}

// console.log(change('Adam ma psa'))


// 3
function charChange(char) {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}

// console.log(charChange('Wojtek ma kota'))

// 4
function p4ngr4m(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (var i = 0; i < str.length; i++) {
            var s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }

        return false
    }

    return true
}

// console.log(p4ngr4m("Wyjechałbym gdzieś poza miasto")

// 5

function letterCombination(str) {
    var summO = 0, summX = 0,
        str = str.toLowerCase(),
        xoArr = str.match(/[xo]/g);
    if (xoArr == null) return true;
    for (var i = 0; i < xoArr.length; i++) {
        if (xoArr[i] === "x") {
            summO += 1;
        } else if (xoArr[i] === "o") {
            summX += 1;
        }
    };
    if (summO === summX) return true;
    else return false;
}

// console.log(letterCombination("Jakość powietrza w Krakowie jest bardzo zła")

// 6
function odd_or_even(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// console.log(odd_or_even(42))

// 7
function numbers() {
    const liczba = Number(prompt(`Podaj liczbe:`));
    const imie = prompt(`Podaj imie:`);

    console.log(`Liczba: ${liczba}\tTyp danych: ${typeof (liczba)}`);
    console.log(`Imie: ${imie}\tTyp danych: ${typeof (imie)}`);
}

// console.log(numbers())

// 8
function nameGiven() {
    const imie = prompt(`Podaj imie:`);
    console.log(`Podane imie: ${imie}`);
}

// console.log(nameGiven())

// 9
function yearOfBirth() {
    const rokUrodzenia = prompt(`Podaj date urodzenia: `, `DD-MM-RRRR`);

    console.log(rokUrodzenia);
}

// console.log(yearOfBirth())


// 10
function cases() {
    const liczba_1 = Number(prompt(`Podaj pierwszą liczbę: `));
    const znak = prompt(`Podaj znak prostej operacji matematycznej: `, `+, -, *, /`);
    const liczba_2 = Number(prompt(`Podaj drugą liczbę: `));
    let wynik;

    switch (znak) {
        case '+':
            wynik = liczba_1 + liczba_2;
            break;
        case '-':
            wynik = liczba_1 - liczba_2;
            break;
        case '*':
            wynik = liczba_1 * liczba_2;
            break;
        case '/':
            wynik = liczba_1 / liczba_2;
            break;
        default:
            console.log(`Podano zly znak`);
    }
    console.log(`${liczba_1} ${znak} ${liczba_2} = ${wynik}`);
}

// console.log(cases())

// 11
var smallAndBigCharacters = s => ![...s].reduce((t, v) => t + ((v = (v.charCodeAt() - 24) % 32) ? v - 23 ? 0 : -1 : 1), 0)
// console.log(smallAndBigCharacters)


//12
function trapez() {
    const podstawa_a = 8, podstawa_b = 3, wysokosc = 5;
    let poleTrapezu;

    poleTrapezu = (((podstawa_a + podstawa_b) * wysokosc) / 2);
    console.log(`Pole trapezu o nastepujacych podstawach ${podstawa_a} cm oraz ${podstawa_b} cm i wysokosci ${wysokosc} cm wynosi ${pole_trapezu} cm^2`);
}

// console.log(trapes())

// 13
function averageFunction() {
    const a = 10, b = 13, c = 25;

    console.log(`Srednia z liczb: ${a}, ${b}, ${c} wynosi: ${(a + b + c) / 3}`);
}

// console.log(averageFunction())

// 14
function pierwiastekKwadratowy() {
    const liczba = 16;

    console.log(`Pierwiastek kwadratowy z liczby ${liczba} wynosi: ${Math.sqrt(liczba)}`);
}
// console.log(pierwiastekKwadratowy())


// 15
function checking_even_or_odd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}
// console.log(checking_even_or_odd(4))


// 16
function pierwiastekSześcienny() {
    const liczba = 27;

    console.log(`Pierwiastek szescienny w liczby ${liczba} wynosi: ${Math.cbrt(liczba)}`);
}

// console.log(pierwiastekSześcienny())


// 17
function wartośćBezwzględna() {
    const x = -5;
    const y = 6;

    console.log(`Wartosc bezwzgledna z ${x} wynosi: ${Math.abs(x)}`);
    console.log(`Wartosc bezwzgledna z ${y} wynosi: ${Math.abs(y)}`);
}

// console.log(wartośćBezwzględna())

//18
function zaokrąglenie() {
    const x = 4.5;
    const y = 5.3;

    console.log(`x: ${x}, y: ${y}`)
    console.log(`Zaokraglenie liczb do gory: ${Math.ceil(x)}, ${Math.ceil(y)}`);
    console.log(`Zaokraglenie liczb do dolu: ${Math.floor(x)}, ${Math.floor(y)}`);
}

// console.log(zaokrąglenie())


// 19
function delta() {
    const a = 1, b = 3, c = -4;
    let delta, x1, x2;

    delta = (b * b) - (4 * a * c);
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log('Rozwiazania rownania kwadratowego x^2 + 3x - 4 = 0');
    console.log(`x1: ${x1}`);
    console.log(`x2: ${x2}`);
}

// console.log(delta())


// 20
function stopaProcentowa() {
    const kwota = 20000, stopaProcentowa = 0.02, kapitalizacja = 4;
    let wartosc_koncowa;

    wartosc_koncowa = kwota * Math.pow((1 + stopaProcentowa), kapitalizacja);
    console.log(`Wartosc koncowa inwestycji wynosi: ${wartosc_koncowa} PLN`);
}
// console.log(stopaProcentowa())


// 21
function condition() {
    const warunek1 = 9 > 2;
    const warunek2 = 5 > 7;

    console.log(`Wartosc wyrazenia logicznego 9 > 2 : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego 5 > 7 : ${warunek2}`);
}

// console.log(condition())

// 22
function condition2() {
    const warunek1 = 5 !== 0;
    const warunek2 = 4 !== 4;

    console.log(`Wartosc wyrazenia logicznego 5 != 0 : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego 4 != 0 : ${warunek2}`);
}

// console.log(condition2())

// 23
function condition3() {
    const warunek1 = (3 > 2) && (6 < 4);
    const warunek2 = (4 > 2) && (7 > 3);

    console.log(`Wartosc wyrazenia logicznego (3 > 2) && (6 < 4) : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego (4 > 2) && (7 > 3) : ${warunek2}`);
}

// console.log(condition3())


// 24
function condition4() {
    const warunek1 = (15 > 13) || (4 < 9);
    const warunek2 = (5 < 4) || (24 > 26);

    console.log(`Wartosc wyrazenia logicznego (15 > 13) || (4 < 9) : ${warunek1}`);
    console.log(`Wartosc wyrazenia logicznego (5 < 4) || (24 > 26) : ${warunek2}`);
}

// console.log(condition4())


// 25
function sumArray20(array) {
    return Array.isArray(array) && array.length > 1
        ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
        : 0
}

// console.log(sumArray20[1, 2, 3, 4, 5])


// 26
function evenOdd(number) {
    if (number % 2 === 0)
        return "Even"
    else
        return "Odd"
}

// console.log(evenOdd(5))

// 27

function numbersNumber() {
    let liczba1 = 15, liczba_2 = 10;
    let temp;

    console.log(`Pierwsza liczba przed zamiana: ${liczba1}`);
    console.log(`Druga liczba przed zamiana: ${liczba2}`);

    temp = liczba1;
    liczba1 = liczba2;
    liczba2 = temp;

    console.log(`Pierwsza liczba po zamiana: ${liczba1}`);
    console.log(`Druga liczba po zamiana: ${liczba2}`);
}

// console.log(numbersNumber())


// 28
function length99() {
    const dlugoscSznurka = 60, dlugoscKawalka = 7;
    let iloscKawalkow, resztkaSznurka;

    iloscKawalkow = Math.floor(dlugoscSznurka / dlugoscKawalka);
    resztkaSznurka = dlugoscSznurka % dlugoscKawalka;

    console.log(`Ilosc utworzonych kawalkow po ${dlugoscKawalka} cm ze sznurka o dlugosci ${dlugosc_sznurka} cm : ${ilosc_kawalkow} sztuk`);
    console.log(`Resztka sznurka: ${dlugoscSznurka} cm`);

}

// console.log(function length99())

// 29
const abFunction = str => (str.match(/A/gi) || []).length == (str.match(/B/gi) || []).length;
// console.log(abFunction('Ala ma kota'))


// 30
function inkrementacjaDekrementacja() {
    let liczba = 5;

    console.log(`Liczba: ${liczba}`);
    liczba++;
    console.log(`Liczba po inkrementacji: ${liczba}`);
    liczba--;
    console.log(`Liczba po dekrementacji: ${liczba}`);

}
// console.log(inkrementacjaDekrementacja(42))


// 31
function potęgowanie() {
    const liczba = 5, wykladnik = 3;
    console.log(`${liczba} ^ ${wykladnik} = ${liczba ** wykladnik}`);
}
// console.log(potęgowanie(42))


// 32
function bmiCounter() {
    const patrykWaga = 83, patrykWysokosc = 1.86;
    const kubaWaga = 65, kubaWysokosc = 1.75;

    let patryk_bmi = patryk_waga / (patrykWysokosc * patrykWysokosc);
    let kuba_bmi = kuba_waga / (kubaWysokosc * kubaWysokosc);

    console.log(`Dane Patryka - waga: ${patrykWaga} kg, wysokosc: ${patrykWysokosc} m`);
    console.log(`BMI Patryka: ${Math.round(patrykBmi * 100) / 100}`);
    console.log(`Dane Kuby - waga: ${kubaWaga} kg, wysokosc: ${kubaWysokosc} m`);
    console.log(`BMI Kuby: ${Math.round(kubaBmi * 100) / 100}`);

}

// console.log(bmiCounter())

// 33
function trueFalse(number) {
    return number & 1 ? 'True' : 'False';
}
// console.log(trueFalse(42))


// 34
function spalanie() {
    const benzyna = 5.21, diesel = 4.95;
    const pojazd1Spalanie = 8, pojazd2Spalanie = 7.5;

    console.log(`Koszt przejechania 100 km dla pojazdu A: ${Math.round((pojazd1Spalanie * benzyna) * 100) / 100} PLN`);
    console.log(`Koszt przejechania 100 km dla pojazdu B: ${Math.round((pojazd2Spalanie * diesel) * 100) / 100} PLN`);
}
// console.log(spalanie())


// 35 
function funkcjaWarunkowa() {
    const liczba = -17;

    if (liczba < 0) {
        console.log('Wartosc zmiennej jest ujemna');
    }
}
// console.log(funkcjaWarunkowa())

// 36
function dodatnieZmienne() {
    const liczba1 = 4, liczba2 = 15;

    if (liczba1 > 0 && liczba2 > 0) {
        console.log('Wartosci zmiennych sa dodatnie');
    }
}
// console.log(dodatnieZmienne())


// 37
const sumArraY = $ => !$ ? 0 : $.sort((a, b) => a - b).slice(1, -1).reduce((acc, el) => acc + el, 0)
// console.log(sumArraY([1, 2, 3], [4, 5, 6]))

// 38
function parzysteNieparzyste() {
    const liczba = 23;

    if (liczba % 2 === 0) {
        console.log('Wartosc zmiennej jest parzysta');
    } else {
        console.log('Wartosc zmiennej jest nieparzysta');
    }
}
// console.log(parzysteNieparzyste())


// 39
function wiekKuby() {
    const wiekKuby = 21;

    if (wiekKuby >= 18) {
        console.log('Kuba jest pelnoletni');
    } else {
        console.log('Kuba nie jest pelnoletni');
    }
}
// console.log(wiekKuby())

// 40
function checkNumber(number) {
    if (number % 2 === 0) {
        return "True";
    }
    return "False";
}
// console.log(checkNumber(42))

//  41
function porównianieLiczb() {
    const a = -15, b = 22, c = 7;

    if (a > b && a > c) {
        console.log(`Liczba a(${a}) jest najwieksza`);
    } else if (b > a && b > c) {
        console.log(`Liczba b(${b}) jest najwieksza`);
    } else if (c > a && c > b) {
        console.log(`Liczba c(${c}) jest najwieksza`);
    }
}
// console.log(porównianieLiczb())

// 42
function rokPrzestepny() {
    const rok = 2025;

    if ((rok % 4 === 0 && rok % 100 !== 0) || rok % 400 === 0) {
        console.log(`Rok ${rok} jest przestepny`);
    } else {
        console.log(`Rok ${rok} nie jest przestepny`);
    }
}
// console.log(rokPrzestepny())

// 43
function dodatnieUjemne() {
    const liczba = -22;

    if (liczba > 0) {
        console.log(`Zadeklarowana liczba(${liczba}) jest dodatnia`);
    } else if (liczba < 0) {
        console.log(`Zadeklarowana liczba(${liczba}) jest ujemna`);
    } else if (liczba === 0) {
        console.log('Zadeklarowana liczba to 0');
    }
}
// console.log(dodatnieUjemne())

// 44
function triangleCheck() {
    const a = 60, b = 60, c = 60;
    let suma;

    suma = a + b + c;
    if (suma === 180 && a > 0 && b > 0 && c > 0) {
        console.log(`Trojkat(${a}, ${b}, ${c}) jest poprawny`);
    } else {
        console.log(`Trojkat(${a}, ${b}, ${c}) nie jest poprawny`)
    }
}
// console.log(triangleCheck())


// 45 
const rightWrong = n => ["right", "wrong"][n & 1];
// console.log(rightWrong())


// 46
function BmiToWeightToHeight() {
    const patrykWaga = 83, patrykWysokosc = 1.86;
    const kubaWaga = 65, kubaWysokosc = 1.75;

    let patrykBmi = patrykWaga / (patrykWysokosc * patrykWysokosc);
    let kubaBmi = kubaWaga / (kubaWysokosc * kubaWysokosc);

    console.log(`Dane Patryka - waga: ${patrykWaga} kg, wysokosc: ${patrykWysokosc} m`);
    console.log(`BMI Patryka: ${Math.round(patrykBmi * 100) / 100}`);
    console.log(`Dane Kuby - waga: ${kubaWaga} kg, wysokosc: ${kubaWysokosc} m`);
    console.log(`BMI Kuby: ${Math.round(kubaBmi * 100) / 100}`);

    if (patrykBmi > kubaBmi) {
        console.log(`Wskaznik BMI Patryka jest wiekszy od wskaznika BMI Kuby o ${Math.round((patrykBmi - kubaBmi) * 100) / 100}`);
    } else {
        console.log(`Wskaznik BMI Kuby jest wiekszy od wskaznika BMI Patryka o ${Math.round((kubaBmi - patrykBmi) * 100) / 100}`);
    }
    // console.log(BmiToWeightToHeight())

    // 47
    function benzineDiesel() {

        const benzyna = 5.21, diesel = 4.95;
        const pojazd_a_spalanie = 8, pojazd_b_spalanie = 7.5;

        console.log(`Koszt przejechania 100 km dla pojazdu A: ${Math.round((pojazd_a_spalanie * benzyna) * 100) / 100} PLN`);
        console.log(`Koszt przejechania 100 km dla pojazdu B: ${Math.round((pojazd_b_spalanie * diesel) * 100) / 100} PLN`);

        const pojazd_a_koszt_550_km = 5.5 * pojazd_a_spalanie * benzyna;
        const pojazd_b_koszt_550_km = 5.5 * pojazd_b_spalanie * diesel;

        console.log(`Koszt przejechania 550 km dla pojazdu A: ${Math.round((pojazd_a_koszt_550_km) * 100) / 100} PLN`);
        console.log(`Koszt przejechania 550 km dla pojazdu B: ${Math.round((pojazd_b_koszt_550_km) * 100) / 100} PLN`);

        if (pojazd_a_koszt_550_km > pojazd_b_koszt_550_km) {
            console.log(`Koszt przejechania 550 km jest tansze dla pojazdu A niz dla pojazdu B o ${Math.round((pojazd_a_koszt_550_km - pojazd_b_koszt_550_km) * 100) / 100} PLN`);
        } else {
            console.log(`Koszt przejechania 550 km jest tansze dla pojazdu B niz dla pojazdu A o ${Math.round((pojazd_b_koszt_550_km - pojazd_a_koszt_550_km) * 100) / 100} PLN`);
        }
    }
    // console.log(benzineDiesel())

    // 48
    function ArraySum(array) {
        if (array) {
            array.sort(function (a, b) { return a - b });
            var newAry = array.slice(1, -1)
            return newAry.reduce(function (acc, val) { return acc + val }, 0);
        } else {
            return 0;
        }
    }
    // console.log(ArraySum([1, 2, 3, 4, 5]))

    // 49
    function enlargeringFunction(string) {
        return string.replace(/[A-Z]/g, function (c) { return " " + c; });
    }
    // console.log(enlargeringFunction('Ala ma kota'))

    // 50
    function fruits() {
        const owoce = ['Banan', 'Kiwi', 'Winogorono', 'Arbuz', 'Jabłko',
            'Pomarańcza', 'Granat', 'Mango', 'Melon', 'Cytryna'];
        const warzywa = ['Marchewka', 'Ogórek', 'Rzodkiewka', 'Cebula',
            'Kapusta', 'Szczypiorek', 'Fasolka'];

        console.log(`Ilosc elementow w tablicy o nazwie owoce: ${owoce.length}`);
        console.log(`Ilosc elementow w tablicy o nazwie warzywa: ${warzywa.length}`);
    }
    // console.log(fruits())

    // 51
    function carsNumber() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo'];

        console.log(`Tablica samochodow: ${samochody}`);

        samochody.pop();
        samochody.push('Mazda');

        console.log(`Tablica samochodow: ${samochody}`);
    }
    // console.log(carsNumber())

    // 52
    function carsTables() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo'];

        console.log(`Tablica samochodow: ${samochody}`);

        samochody.shift();
        samochody.unshift('Mazda');

        console.log(`Tablica samochodow: ${samochody}`);
    }
    // console.log(carsTables())

    // 53
    function obst() {
        const warzywa = ['Marchewka', 'Ogórek', 'Rzodkiewka', 'Cebula',
            'Kapusta', 'Szczypiorek', 'Fasolka'];

        console.log(`Indeks elementu o nazwie Cebula: ${warzywa.indexOf('Cebula')}`);
    }
    // console.log(obst())

    // 54
    function samochodySplice() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

        console.log(`Tablica samochodow: ${samochody}`);
        samochody.splice(2, 2);
        console.log(`Tablica samochodow: ${samochody}`);
    }
    // console.log(samochodySplice())

    // 55
    function wagenModellen() {
        const samochody = ['Audi', 'BMW', 'Mercedes', 'Volvo', 'Mazda', 'Fiat'];

        console.log(`Tablica samochodow: ${samochody}`);
        samochody[2] = 'Opel';
        samochody[4] = 'Nissan';
        console.log(`Tablica samochodow: ${samochody}`);
    }
    // console.log(wagenModellen())

    // 56
    function sumowanieTablic(array) {
        if (array == null || array.length < 2) {
            return 0;
        }
        var sum = 0;
        var max = array[0];
        var min = array[0];
        for (var i = 0; i < array.length; i++) {
            max = max < array[i] ? array[i] : max;
            min = min > array[i] ? array[i] : min;
            sum += array[i];
        }
        sum -= (max + min);
        return sum;
    }
    // console.log(wagenModellen([1, 2, 3], [4, 5, 6]))

    // 57
    combinationOfSigns = (str) => !(str.split(/[aA]/).length - str.split(/[bB]/).length);
    // console.log(combinationOfSigns('Super partia'))

    // 58
    function isPalindrome(text) {
        return text
            .toLowerCase()
            .split('')
            .reverse()
            .join('') === text.toLowerCase();
    }
    // console.log(isPalindrome("ala"))

    // 59
    const max = (...values) => {
        let max = values[0];
        for (let i = 1; i < values.length; i++) {
            if (values[i] > max) {
                max = values[i];
            }
        }
        return max;
    }
    // console.log(max())

    // 60
    function range(start, stop, step = 1) {
        if (stop === undefined) {
            stop = start;
            start = 0;
        }

        const temp = [];
        // let i = 0;

        while (temp.length < (stop - start) / step) {
            temp.push(start + temp.length * step)
        }
        return temp;
    }
    // console.log(range(10, 5))

    // 61
    function randomP4ngr4m(string) {
        const letters = string.toLowerCase().match(/[a-z]/g);
        const alphabet = [...new Set(letters)]
        return alphabet.length === 26;
    }
    // console.log(randomP4ngr4m('Ala ma kota'))

    // 62
    async function getExchangeRate(url, currencyCode) {
        const response = await fetch(`${url}${currencyCode}?format=json`);
        return await response.json();
    }
    getExchangeRate('http://api.nbp.pl/api/exchangerates/rates/a/', 'EUR').then(data => {
        console.log(data.rates[0].mid);
    });

    https://danepubliczne.imgw.pl/api/data/synop/

    function getWeather(url) {
        return fetch(url).then(response => response.json());
    }

    function getWeatherData(promise, weatherParams) {
        promise.then(data => {
            const newData = data.map(item => `${item.stacja}: ${item[weatherParams]}`);
            console.log(newData);
        })
    }
    // 65

    const result = getWeather("https://danepubliczne.imgw.pl/api/data/synop/");
    getWeatherData(result, 'temperatura')

    // drugi sposó, który jednak łamie zasdę single responsibility 
    function getWeather(url, weatherParams) {
        return fetch(url).then(response => response.json().then(data => {
            const newData = data.map(item => `${item.stacja}: ${item[weatherParams]}`);
            console.log(newData);
        }));
    }

    getWeather("https://danepubliczne.imgw.pl/api/data/synop/");

    // trzeci sposób

    function getWeather(url) {
        return fetch(url).then(response => response.json());
    }

    async function getWeather2(url) {
        return await fetch(url).then(response => response.json());
    }

    function getWeatherData(url, weatherParams, fns) {
        fns(url).then(data => {
            const newData = data.map(item => `${item.stacja}: ${item[weatherParams]}`);
            console.log(newData);
        })
    }
    // 69
    const functionToUpper = string => {
        return [...string].map((char) => {
            return (char === char.toUpperCase()) ? ` ${char}` : char;
        }).join('');
    }
    // console.log(functionToUpper('Janusz kupił rower'))

    // 70
    print(() => {
        // console.log("Prosta funkcja.")
    });
    //71
    addition((a, b) => {
        return a + b
    });

    // console.log(addition(5, 6))
    // 72
    multiplication((a, b) => {
        return a * b;
    });

    // console.log(multiplication(10, 10))

    // 73
    dividing((a, b) => {
        return a / b;
    });
    // console.log(dividing(10, 5))

    // 74
    amplification((a) => {
        return a * a
    });
    // console.log(amplification(10));

    //75
    dzieleniePrzez2(function (number) {
        if (number % 2 === 0) {
            console.log('Liczba ${number} jest podzielna przez dwa bez reszty')
        } else {
            console.log('Liczba ${number} nie jest podzielna przez dwa bez reszty')
        }
    });
    // console.log(dzieleniePrzez2(42))

    // 76
    toCelsius(function (f) {
        return (f - 32) * (5 / 9);
    });
    // console.log(toCelsius(42))

    // 77
    toFahrenheit(function (c) {
        return (c * 9 / 5) + 32;
    });
    // console.log(toFahrenheit(42))

    // 78
    toMeter(function (y) {
        return (y / 1, 09144);
    });
    // console.log(toMeter(42))

    // 79
    toYard(function (m) {
        return (m * 1, 093613);
    });
    // console.log(toYard(42))

    // 80
    greet(function () {
        const name = window.prompt("Enter your name: ");
        if (name != null) {
            document.getElementById("demo").innerHTML =
                "Hello" + person + "! How are you today?";
        }
    });
    // console.log(greet())

    // 81
    circleArea(function (radius) {
        return 3.14 * radius ** 2;
    });
    // console.log(circleArea(42))

    // 82
    circlePerimeter(function (radius) {
        return 2 * 3.14 * radius
    });
    // console.log(circlePerimeter(42))

    // 83
    squareArea((a) => {
        return a * a
    });
    // console.log(squareArea(10))

    // 84
    squarePerimeter(function (a) {
        return 4 * a
    });
    // console.log(squarePerimeter(10))

    // 85
    squareRectangle(function (a, b) {
        return a * b
    });
    // console.log(squareRectangle(10, 20))

    // 86
    rectanglePerimeter((a, b) => {
        return 2 * (a + b)
    });
    // console.log(rectanglePerimeter(10, 20))

    // 87
    squareParallelogram((a, h) => {
        return a * h
    });
    // console.log(squareParallelogram(10, 20))

    // 88
    perimeterParallelogram(function (a, b) {
        return 2 * (a + b)
    });
    // console.log(perimeterParallelogram(10, 20))

    // 89
    squareRhomb(function (e, f) {
        return (e * f) / 2
    });
    // console.log(squareRhomb(10, 20))

    // 90
    setTimeout(function () {
        //console.log("JavaScript Rules")
    }, 4000);

    // 91
    setInterval(() => {
        //console.log("Wygenerowano setInterval")
    }, 10000);

    // 92
    let count = 0;
    function countHello(liczba) {
        console.log("Liczba, która przychodzi:", liczba)
        let pointer = setInterval(() => {
            count += 1;
            console.log("Hello", count);
            if (count === liczba) {
                clearInterval(pointer)
            }
        }, 1000);
    }
    // console.log(countHello(20))

    // 94
    function signsCombination(str) {
        return str = str.toLowerCase(), str.split("X").length == str.split("D").length
    }
    // console.log(signsCombination('Ride rules'))

    // 95
    let getNumber = (number, array) => {
        return array.includes(number);
    };

    // console.log(getNumber(20, [1, 2, 3, 20]))

    // 96
    let addTheSameNumbers = (number, array) => {
        let counter = 0;
        if (array.includes(number)) {
            array.filter(element => {
                if (element === number) {
                    counter += number;
                };
            });
        } else {
            return null
        }
        return counter;
    };
    // console.log(addTheSameNumbers(20, [1, 2, 3, 20]))

    // 98
    let factors = number => {
        arr = []
        if (number > 0) {
            for (let i = number - 1; i >= 0; i--) {
                console.log
                // if (number % 2 === 0){
                //     arr.push(number)
                // };
            };
        } else if (number <= 0) {
            return [];
        } return arr;
    }
    // console.log(factors(42))

    // 99
    function evaluateToP4ngram(string) {
        return string
            .replace(/[^a-z]/gi, '')
            .toLowerCase()
            .split('')
            .filter(function (e, p, a) { return a.indexOf(e) == p })
            .sort()
            .join('').length == 26;
    }
    // console.log(evaluateToP4ngram('Jarek nie lubi pić piwa.'))
