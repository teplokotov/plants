document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener('resize', function(event){
        if (document.querySelector('.city-select.selected')) {
            if (window.screen.width >= 766 && window.screen.width <= 1438) {
                document.querySelector('.contact-us-adress').classList.add('fix768');
                document.querySelector('.section-contact-us-image').classList.add('fix768');
            }
            if (window.screen.width <= 766) {
                document.querySelector('.contact-us-adress').classList.remove('fix768');
                document.querySelector('.section-contact-us-image').classList.remove('fix768');
                document.querySelector('.contact-us-adress').classList.add('fix380');
                document.querySelector('.section-contact-us-image').classList.add('fix380');
            }
        }
    });

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

    let serviceButton = document.querySelector('.service-button');
    let Adresses = {'Canandaigua, NY': ['+1 585 393 0001', '151 Charlotte Street'],
                    'New York City': ['+1 212 456 0002', '9 East 91st Street'],
                    'Yonkers, NY': ['+1 914 678 0003','511 Warburton Ave'],
                    'Sherrill, NY': ['+1 315 908 0004', '14 WEST Noyes BLVD']
                    };

    document.addEventListener('click', e => {

        if (e.target.getAttribute('name') == 'accordion-group'){
            if (e.target.className.includes('opened')) {
                e.target.checked = false;
                e.target.classList.remove('opened');
            } else {
                document.getElementById('option-1').classList.remove('opened');
                document.getElementById('option-2').classList.remove('opened');
                document.getElementById('option-3').classList.remove('opened');
                e.target.classList.add('opened');
            }

        }

        if (e.target.className.includes('service-button')){
            activatedButtons = document.querySelectorAll('.activated');
            if (activatedButtons.length == 2) {
                if (e.target.classList.contains('activated')) {
                    e.target.classList.toggle('activated');
                } else {
                    activatedButtons.forEach(el => el.classList.toggle('activated'));
                    e.target.classList.toggle('activated');
                }
            } else {
                e.target.classList.toggle('activated');
            }
            activatedButtons = document.querySelectorAll('.activated');
            makeBlur(activatedButtons);
        }

        if (e.target.className.includes('city-select')){
            toggleDropdown(e);
        } else if (!e.target.className.includes('contact-us-dropdown-content')){
            citySelect = document.querySelector('.city-select');
            citySelect.classList.remove('opened');
            dropdownArea = document.querySelector('.contact-us-dropdown-content');
            dropdownArea.classList.remove('opened');
        }

        if (e.target.className.includes('dropdown-link')){
            document.querySelector('.city-select').innerHTML = e.target.textContent;
            document.querySelector('.city-select').classList.add('selected');
            document.querySelector('.contact-us-adress').style.display="flex";
            document.querySelector('.row-city-value').innerHTML = e.target.textContent;
            document.querySelector('.row-phone-value').innerHTML = Adresses[e.target.textContent][0];
            document.querySelector('.row-adress-value').innerHTML = Adresses[e.target.textContent][1];
            let tel = 'location.href="tel:' + Adresses[e.target.textContent][0] + '"';
            document.querySelector('.contact-us-button-row').setAttribute('onclick', tel.split(' ').join(''));

            if (window.screen.width >= 766 && window.screen.width <= 1438) {
                document.querySelector('.contact-us-adress').classList.add('fix768');
                document.querySelector('.section-contact-us-image').classList.add('fix768');
            }
            if (window.screen.width <= 766) {
                document.querySelector('.contact-us-adress').classList.add('fix380');
                document.querySelector('.section-contact-us-image').classList.add('fix380');
            }
        }

    });

    function toggleDropdown(e){
        e.target.classList.toggle('opened');
        dropdownArea = document.querySelector('.contact-us-dropdown-content');
        dropdownArea.classList.toggle('opened');
    }

    function makeBlur(activatedButtons){
        let ResultBlurMatrix = [];
        let GardenItemMatrix = [0, 0, 0, 0, 0, 0];
        let LawnItemMatrix = [0, 0, 0, 0, 0, 0];
        let PlantingItemMatrix = [0, 0, 0, 0, 0, 0];

        let ArrActivatedButtons = Array.from(activatedButtons);

        for (i = 0; i < ArrActivatedButtons.length; i++) {
            if(ArrActivatedButtons[i].classList.contains('gardens')){
                GardenItemMatrix = [1, 0, 0, 0, 1, 0];
            }
            if(ArrActivatedButtons[i].classList.contains('lawn')){
                LawnItemMatrix = [0, 0, 1, 0, 0, 0];
            }
            if(ArrActivatedButtons[i].classList.contains('planting')){
                PlantingItemMatrix = [0, 1, 0, 1, 0, 1];
            }
        }
        for (k = 0; k < 6; k++) {
            ResultBlurMatrix[k] = GardenItemMatrix[k] + LawnItemMatrix[k] + PlantingItemMatrix[k];
        }
        
        let total = 0;
        for (i in ResultBlurMatrix) {
            total += ResultBlurMatrix[i];
        }
        if (total == 0) {
            ResultBlurMatrix = [1, 1, 1, 1, 1, 1];
        }

        let serviceItems = document.querySelectorAll('.service-item');
        let counter = 0;
        for (let sItem of serviceItems) {
            sItem.classList.remove("blur");
        }
        for (let sItem of serviceItems) {
            if (ResultBlurMatrix[counter] == 0) {
                sItem.classList.add("blur");
            }
            counter++;
        }

    }

});

console.log('\nPart 1: 110/110\n\n1. Вёрстка валидная +10\n2. Вёрстка семантическая +20\n3. Вёрстка соответствует макету +48\n4. Требования к css + 12\n5. Интерактивность, реализуемая через css +20');
console.log('\nPart 2: 85/85\n\n1. Вёрстка соответствует макету 768px +24\n2. Вёрстка соответствует макету 380px +24\n3. Не появляется горизонтальная полоса прокрутки +15\n4. До 380рх реализовано адаптивное меню +22\n');
console.log('\nPart 3: 125/125\n\n1. Происходит смена фокуса на услугах в разделе service +50\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25');