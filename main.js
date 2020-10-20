import  {sideBarMenu} from "./js/ecommerce/side_bar.js";


// variables DOM
const d = document,
  w = window;

// variables
const $cartBtn = d.querySelector(".cart-btn");
const $closeCartBtn = d.querySelector(".close-cart");
const $clearCartBtn = d.querySelector(".clear-cart");
const $cartDOM = d.querySelector(".cart");
const $cartOverlay = d.querySelector(".cart-overlay");
const $cartItems = d.querySelector(".cart-items");
const $cartTotal = d.querySelector(".cart-total");
const $cartContent = d.querySelector(".cart-content");
const $productsDOM = d.querySelector(".products-center");
//cart
let cart = [];
//buttons DOM
let buttonsDOM = [];

// gettin the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      console.log(products);
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display Products
class UI {
  displayProducts(products) {
    console.log("products", products);
    let result = "";

    products.forEach((product) => {
      result += `
      <article class="product">
        <div class="img-container">
            <img src=${product.image} alt="product" class="product-img">
            <button class="bag-btn" data-id-product=${product.id}>
                <i class="fas fa-shopping-cart"></i>
                add to cart
            </button>
        </div>
        <h3>${product.title}</h3>
        <h4>${product.price}</h4>
      </article>
      `;
    });

    $productsDOM.innerHTML = result;
  }
  getBagButtons() {
    const $buttons = [...d.querySelectorAll(".bag-btn")];
    buttonsDOM = $buttons;
    console.log($buttons);
    $buttons.forEach((button) => {
      console.log(button);
      let id = button.dataset.idProduct;
      let inCart = cart.find(item => item.id === id);
      console.log("inCart",inCart);
      if (inCart) {
        button.innerText = `In Cart`;
        button.disabled = true;
      } else {
        button.addEventListener("click", (e) => {
          console.log("click-button",e);
          e.target.innerText = "In cart";
          e.target.disabled = true;
          //get product of products
          let cartItem = { ...Storage.getProduct(id), amount: 1 };
          //add product to the cart
          cart = [...cart, cartItem];
          console.log("cartItem",cartItem);
          console.log("cart",cart);
          //save cart in local storage
          Storage.saveCart(cart);
          //set cart values
          this.saveCartValues(cart);
          //display cart item
          this.addCartItem(cartItem);
          //show the cart
          this.showCart();
        });
      }
    });
  }
  saveCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    $cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    $cartItems.innerText = itemsTotal;
    console.log("$cartTotal- $cartItems",$cartTotal, $cartItems);
  }

  addCartItem(item) {
    const div = d.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src=${item.image} alt="product">  
      <div>
          <h4>${item.title}</h4>
          <h5>${item.price}</h5>
          <span class="remove-item" data-id=${item.id}>Remove<i class="fas fa-trash"></i></span>
      </div>
      <div>
          <i class="fas fa-chevron-up" data-id=${item.id}></i>
          <p class="item-amount">${item.amount}</p>
          <i class="fas fa-chevron-down" data-id=${item.id}></i>
      </div>
    `;
    $cartContent.appendChild(div);
    console.log("$cartContent",$cartContent);
  }

  showCart() {
    $cartOverlay.classList.add("transparentBcg");
    $cartDOM.classList.add("showCart");
  }
  setupApp() {
    cart = Storage.getCart();
    this.saveCartValues(cart);
    this.populate(cart);
    $cartBtn.addEventListener("click", this.showCart);
    $closeCartBtn.addEventListener("click", this.hiddeCart);
  }
  populate(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }
  hiddeCart() {
    $cartOverlay.classList.remove("transparentBcg");
    $cartDOM.classList.remove("showCart");
  }
  cartLogic() {
    //cleart cart button
    $clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });
    //cart functionality
    $cartContent.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target.classList.contains("remove-item")) {
       
        let removeItem = e.target;
        let id = removeItem.dataset.id;
        $cartContent.removeChild(removeItem.parentElement.parentElement);
        this.removeItem(id);
        console.log("removeItem",removeItem);
        
      } else if (e.target.classList.contains("fa-chevron-up")) {
      
        let addAmount = e.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount + 1;
        Storage.saveCart(cart);
        this.saveCartValues(cart);
        addAmount.nextElementSibling.innerText = tempItem.amount;

      }else if(e.target.classList.contains("fa-chevron-down")){
        let lowerAmount = e.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        console.log('tempItem',tempItem);
        tempItem.amount = tempItem.amount - 1;
        if(tempItem.amount > 0){
          Storage.saveCart(cart);
          this.saveCartValues(cart);
          lowerAmount.previousElementSibling.innerText = tempItem.amount;
        }else{
          $cartContent.removeChild(lowerAmount.parentElement.parentElement);
          this.removeItem(id);
        }
      }
    });
  }
  clearCart() {
    let cartItems = cart.map((item) => item.id);
    console.log("cartItems",cartItems);
    cartItems.forEach((id) => this.removeItem(id));
    while ($cartContent.children.length > 0) {
      $cartContent.removeChild($cartContent.children[0]);
    }
    this.hiddeCart();
  }

  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    console.log("cart removeItem",cart);
    this.saveCartValues(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    console.log("getSingle Button",this.getSingleButton(id));
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
  }
  getSingleButton(id) {
    console.log("buttonsDOM",buttonsDOM.find(button => button.dataset.idProduct === id));
    return buttonsDOM.find(button => button.dataset.idProduct === id);
  }
}
// local Storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find(product => product.id === id);
  }
  static saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

d.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //setup APP
  ui.setupApp();

  //get all products
  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });

    sideBarMenu(".openSideBarMenu", ".panelMenu", ".menu a");
});
