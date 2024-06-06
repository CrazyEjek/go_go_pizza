import { renderPizza } from '../modules/renderPizzas.js';
import { renderToppings } from '../modules/renderTopping.js';
import { toppingsToogle } from '../modules/toppingToggle.js';




const init = () => {
    toppingsToogle();
    renderToppings();
    renderPizza();
};

init();
