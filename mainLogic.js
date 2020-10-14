
class Cart{
    constructor(){

    }

    clear(){

    }

    remove(){

    }

    add(){

    }
}


const addToCart_1 = document.querySelectorAll('[add-to-cart_1]')
const product_1 = document.querySelector('[product_1]')
const product_1Text = product_1.innerText

const cart = new Cart()

addToCart_1.forEach(div =>{
    div.addEventListener('mouseover', () => {
        product_1.style.fontSize = "large"
        product_1.innerText = "Add To Cart" 
    })
    div.addEventListener('mouseout', () => {
        product_1.style.fontSize = "small"
        product_1.innerText = product_1Text
    })
})

