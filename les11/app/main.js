console.log(document.all[5].innerHTML = 'sdfkjdsfklj');
console.dir(document);
document.title = 'Победа';
//Методы поиска внутренних тегов-элементов страницы

const three = document.querySelector('.three');
console.dir(three);
// three.innerHTML = '<strong>33</strong>';
three.innerText = '<strong>33</strong>';
// console.log(three.outerHTML);
three.classList.add('blue');
console.log(three.textContent);

//удаление элемента
// three.remove();
// console.log(three.parentElement);
console.dir(three.parentNode);
console.log(three.previousSibling);

//Создание элемегьлв
const el = document.createElement('h3');
el.innerText = 'h3 tag';
console.dir(el);
document.body.appendChild(el);
three.appendChild(el);