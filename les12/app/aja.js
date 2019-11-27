const cities = [],
    inSearch = document.querySelector('.in-search'),
    outSearch = document.querySelector('.out-search');

document.querySelector('.load')
    .addEventListener('click', loadCities);

document.addEventListener('DOMContentLoaded', loadCities);

outSearch.addEventListener('click', stuk);

inSearch.addEventListener('keyup', search);

function loadCities() {
    //Создание объекта
    let aja = new XMLHttpRequest(),
        answ = '';

    //Настройка
    aja.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Данные получены, господин');
            answ = JSON.parse(this.responseText);
            formateCities(answ);
        }
    });

    aja.open('GET', 'https://api.hh.ru/areas/5', true);
    /*
    GET - 80%
    POST - 15%
    PUT - 2%
    DELETE - 2.5%
    others - 0.5%
    */
    //Отправка запроса(данных, отсылка)
    aja.send();
}

function formateCities(obj) {
    console.log(obj);
    const c = obj.areas.map(region => {
        return region.areas.map(city => {
            return city.name;
        })
    });
    c.forEach(reg => {
        cities.push(...reg)
    });
    cities.sort();
}

function search(ev) {
    const sVal = inSearch.value.toLowerCase();
    console.log('Изменения в строке поиска, господин', sVal);
    const citiesFiltered = cities.filter(city => {
        return city.toLowerCase().startsWith(sVal);
    });
    console.clear();
    console.log(citiesFiltered);
    renderCities(citiesFiltered);
}

function renderCities(cArr) {
    const data = cArr.slice(0, 10).map(c => {
        return `<p>${c}</p>`;
    }).join('');
    outSearch.innerHTML = data;
}

function stuk(ev) {
    inSearch.value = ev.target.innerText;
    outSearch.innerHTML = '';
}