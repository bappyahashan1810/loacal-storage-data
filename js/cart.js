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


    // add product and quantity to localStorage
    localStorage.setItem(product, quantity);
}

const displayProducts = (product, quantity) => {
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ulContainer.appendChild(li);
}