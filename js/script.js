import { modalController } from '../modules/modalController.js';
import { renderPizza } from '../modules/renderPizzas.js';
import { renderToppings } from '../modules/renderTopping.js';
import { toppingsToogle } from '../modules/toppingToggle.js';
import { modalCartController } from '../modules/renderCart.js';




const init = () => {
    toppingsToogle();
    renderToppings();
    renderPizza();
    modalController({
        modal: '.modal-cart',
        btnOpen: '.header__cart',
        btnClose: '.modal__close',
        cbOpen() {
            modalCartController();
        }
    });
    modalController({
        modal: '.modal-cart',
        btnOpen: '.hero__order',
        btnClose: '.modal__close',
        cbOpen() {
            modalCartController();
        }
    })
    
};

init();
