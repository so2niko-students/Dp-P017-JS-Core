function loadUser() {
    const aja = new XMLHttpRequest();
    aja.open('GET', 'https://randomuser.me/api/', true);
    aja.addEventListener('readystatechange', function () {
        if (this.status == 200 && this.readyState == 4) {
            console.log(JSON.parse(this.responseText));
        }
    });

    aja.send();
}

function loadUserPromise() {
    const unicorn = new Promise(function (res, rej) {
        const aja = new XMLHttpRequest();
        aja.open('GET', 'https://randomuser.me/api/', true);
        aja.addEventListener('readystatechange', function () {
            if (this.status == 200 && this.readyState == 4) {
                res(JSON.parse(this.responseText));
            }
        });

        aja.send();
    });

    unicorn.then(showUser);
}

function loadUserFetch() {
    fetch('https://randomuser.me/api/').then(pr => pr.json()).then(showUser);
    /*.catch(d => console.log(d));*/
}

function showUser(data) {
    const user = data.results[0];
    console.log(data);
    document.body.appendChild(document.createElement('h1'));
    let name = document.querySelector('h1');
    name.innerText = user.name.first;
    document.body.appendChild(document.createElement('img'));
    let img = document.querySelector('img');
    img.src = user.picture.thumbnail;
    name.innerText += ` ${user.dob.age}`;
}

document.querySelector('.load-user').addEventListener('click', loadUserFetch);