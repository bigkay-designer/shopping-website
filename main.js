if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}
let cartImg = document.querySelector('#cart-img');

let log = console.log;

function ready() {
  let AddBtn = document.querySelectorAll('#cart-btn')
  for (i = 0; i < AddBtn.length; i++){
    let mainButton = AddBtn[i]
    
    mainButton.addEventListener('click', function (event) {
      addToCart()
    })
  }
  
}


// add to cart function
function addToCart(product, quantity, price, total) {
  let content = [{
    itemDesc: event.target.parentElement.children[1].children[0].innerText,
    itemQuantity: event.target.parentElement.children[1].children[1].value,
    itemPrice: event.target.parentElement.children[1].children[2].innerText,
  }]

  // let priceNumber =parseInt(itemPrice)
  // let quantityNumber =parseInt(itemQuantity)
  log()
  tableData = []
  
  let items = {
    product: content[0].itemDesc,
    quantity: content[0].itemQuantity,
    price: content[0].itemPrice,
    total: 0
  }
  let priceToNumber = parseInt(items.price)
  let quantityToNumber = parseInt(items.quantity)
  total = items.total
  total += priceToNumber * quantityToNumber

  tableData.push(items)

  // startinng  the table
  let cartDiv = document.querySelector('#table-data')

  // adding the data to the table
  for (let user of tableData) {
    let test = document.createElement('div')
    log(test)
    cartDiv.appendChild(test)
    test.innerHTML =
      '<p>' + user.product + '</p>' +
      '<p>' + user.quantity + '</p>' +
      '<p>' + '£' + user.price + '</p>' +
      '<p>' + total + '</p>';
    // console.log(cartList)
    // log()
  }

  let cartItemContainer = document.querySelectorAll('#table-data')
  let finalTotal = 0
  for (i = 0; i < cartItemContainer.length; i++) {
    let cartData = cartItemContainer[i];
    let priceElement = event.target.parentElement.children[1].children[2].innerText
    let quantityElement = event.target.parentElement.children[1].children[1].value
    log(priceElement, quantityElement)
    let priceNumber = parseInt(priceElement);
    let quantityNumber = parseInt(quantityElement)
    finalTotal = finalTotal + (priceNumber * quantityNumber)
    $('#cart-total').html(finalTotal)
    log(finalTotal)

  }
}


cartImg.addEventListener('click', function() {
  $('#cart-info').toggle();
  $('#cart-table').css('background-color', '#adcee9');
});
// update cart function
// function updateCartTotal()
// {
//   let cartItemContainer = document.querySelectorAll('.item-paras')
//   let total = 0
//   for (i = 0; i < cartItemContainer.length; i++){
//     let cartData = cartItemContainer[i];
//     let priceElement = cartData.getElementsByClassName('item-price')[0]
//     let quantityElement = cartData.getElementsByClassName('table-input')[0]
//     // let priceNumber = parseInt(priceElement.innerText.replace('$ '));
//     // let quantityNumber = parseInt(quantityElement.value = 1)

//     log(priceElement, quantityElement)
//     // log(total)
//     // log(cartData.children[4])
//   }
// }

