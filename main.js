const log = console.log;
let cartBtn = document.querySelectorAll('#cart-btn')

cartBtn.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    let name = event.target.parentElement.children[1].children[0].innerText;
    let price = event.target.parentElement.children[1].children[2].innerText
    let count = event.target.parentElement.children[1].children[1].value = 1 ;
    let c = 0
    if (count == 1) {
        c += count

}
   
    log(count)
    // log(name,price)
    addToCart(name, price, count)
    cartCount()
    cartTotal()
    cartFinalTotal()
    displayCart()
  })
})


let cart = [];

let object = function (name, price, count, total) {
  this.name = name
  this.price = price
  this.count = count
  this.total = total
}

      // display the data

function displayCart() {
  let cartTable = document.querySelector('#table-data')
  let cartArray = cart
  let outPut = document.createElement('div')
  for (let i in cart){
    outPut.innerHTML =
    '<p>' +
    cartArray[i].name +
    '</p>' +
    '<p>' +
    cartArray[i].count +
    '</p>' +
    '<p>' +
    '£' +
    cartArray[i].price +
    '</p>' + 
      '<p>' +'£' + 
      cartArray[i].total +
    '</p>';
    cartTable.appendChild(outPut)
  }
}

    //add to cart function
function addToCart(name, price, count, total) {
  for (let i in cart) {
    if (cart[i].name === name) {
      cart[i].count += count;
      log(cart)
      return
    }
  }

  let items = new object(name, price, count, total)
  cart.push(items)
}

    // counting carts

function cartCount() {
  let totalCount = 0
  for (let i in cart) {
    totalCount += cart[i].count
    log(totalCount)
  }
}
cartCount()

    //  total cart items
function cartTotal() {
  for (let i in cart) {
    cart[i].total = cart[i].price * cart[i].count
  }
}

cartTotal()

      // total cart function

function cartFinalTotal() {
  let finalPrice = 0;
  for (let t in cart) {
    finalPrice = finalPrice + cart[t].total
    // log(finalPrice)
  }
  $('#cart-total').html(finalPrice)
}
  
cartTotal()