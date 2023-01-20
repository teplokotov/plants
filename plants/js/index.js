document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('.body');
    const header = document.querySelector('.header');
    const toggleBox = document.querySelector('.toggle-box');
    const nav = document.querySelector('.nav');
    const list = document.querySelector('.nav-list');
    const items = document.querySelectorAll('.nav-item');
    
    function open() {
        body.classList.toggle('opened');
        nav.classList.toggle('opened');
        toggleBox.classList.toggle('opened');
        list.classList.toggle('opened');
    }

    function close() {
        body.classList.remove('opened');
        nav.classList.remove('opened');
        toggleBox.classList.remove('opened');
        list.classList.remove('opened');
    }

    toggleBox.addEventListener('click', open);
    items.forEach(el => el.addEventListener('click', close));
    header.addEventListener('click', e => { e.target.className.includes('header') ? close() : 0 });
});

console.log('\nPart 1: 110/110\n\n1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20');
console.log('\nPart 2: 85/85\n\n1. Вёрстка соответствует макету 768px +24\n2. Вёрстка соответствует макету 380px +24\n3. Не появляется горизонтальная полоса прокрутки +15\n4. До 380рх реализовано адаптивное меню +22\n');