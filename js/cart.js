const getInputFieldbyId = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    inputField.value = '';
    return inputFieldText;
}


const addToCart = () => {
    const product = getInputFieldbyId('product-field');
    const quantity = getInputFieldbyId('quantity-field');
    console.log(product, quantity);


    // display section 
    displayProducts(product, quantity);
    savedToLocalStorage(product, quantity);


    // add product and quantity to localStorage
    // localStorage.setItem(product, quantity);
}

const getCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    return cart;
}


const savedToLocalStorage = (product, quantity) => {
    const cart = getCartFromLocalStorage();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);

}

const displayProducts = (product, quantity) => {
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ulContainer.appendChild(li);
}
const setDisplayFromLocalStorage = () => {
    const cart = getCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        displayProducts(product, quantity);
    }
}
setDisplayFromLocalStorage();