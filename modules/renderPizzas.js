import { getData } from "./getData.js";
import { modalController } from "./modalController.js";
import { renderModalPizza } from "./renderModalPizza.js";

const btnReset = document.createElement('button');
btnReset.classList.add('pizza__reset-toppings');
btnReset.textContent = 'Сбросить фильтр';
btnReset.type = 'reset';
btnReset.setAttribute('form', 'toppings');

const createCard = (data) => {
    const card = document.createElement('article');
    card.classList.add('card', 'pizza__card');

    card.innerHTML = `
            <picture>
            <source srcset="${data.images[1]}" type="image/webp">
                <img class="card__image" src="${data.images[0]}" alt="${data.name.ru}">
            </picture>

                <div class="card__content">
                <h3 class="card__title">${data.name['ru'][0].toUpperCase()}${data.name['ru'].slice(1).toLowerCase()}</h3>

                <p class="card__info">
                    <span class="card__price">${data.price['25cm']} ₽</span>
                    <span>/</span>
                    <span class="card__size">25 см</span>
                </p>

                <button class="card__button" data-id="${data.id}">Выбрать</button>
                </div>`;

    return card;
};

export const renderPizza = async(toppings) => {
    const pizzas = await getData(
        `https://beautiful-wry-addition.glitch.me/api/products${
            toppings ? `?toppings=${toppings}` :'' }`,
);
    
const pizzaTitle = document.querySelector('.pizza__title');        
const pizzaList = document.querySelector('.pizza__list');
        pizzaList.textContent = '';

        if (pizzas.length) {
            pizzaTitle.textContent = 'Пицца'
            btnReset.remove();
            const items = pizzas.map((data) => {
                const item = document.createElement('li');
                item.classList.add('pizza__item');
                const card = createCard(data);
                item.append(card);
                return item;
            });
            pizzaList.append(...items);

            modalController({
                modal: '.modal-pizza',
                 btnOpen: '.card__button',
                 btnClose: '.modal__close',
                 async cbOpen(btnOpen) {
                    const pizza = await getData(
                        `https://beautiful-wry-addition.glitch.me/api/products/${btnOpen.dataset.id}`,);
                        renderModalPizza(pizza);
                 },
            });
        } else {
                pizzaTitle.textContent = 'Такой пиццы у нас нет :('
                pizzaTitle.after(btnReset);
            
        }
};

btnReset.addEventListener('click', () => {
    renderPizza();
    document.querySelector('.toppings__reset').remove();
});

