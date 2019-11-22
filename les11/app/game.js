const text = document.querySelector('.text'),
    inColor = document.querySelector('#in_color');

document.body.addEventListener('keypress', (ev) => {
    console.log(ev);
    text.innerHTML += ev.key;
});

document.querySelector('.clear')
    .addEventListener('click', () => {
        text.innerText = 'Text: ';
    });

inColor.addEventListener('change', ev => {
    text.style.color = inColor.value;
});