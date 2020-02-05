if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

let cartImg = document.querySelector('#cart-img');
let cartDiv = document.querySelector('#table-data');
let log = console.log;

function ready() {
  let AddBtn = document.querySelectorAll('#cart-btn');
  for (i = 0; i < AddBtn.length; i++) {
    let mainButton = AddBtn[i];

    mainButton.addEventListener('click', function(event) {
      addToCart();
      te();
    });
  }
}

// add to cart function
function addToCart(/*product, quantity, price, total*/) {
  let content = [
    {
      itemDesc: event.target.parentElement.children[1].children[0].innerText,
      itemQuantity: event.target.parentElement.children[1].children[1].value,
      itemPrice: event.target.parentElement.children[1].children[2].innerText
    }
  ];

  // let priceNumber =parseInt(itemPrice)
  // let quantityNumber =parseInt(itemQuantity)
  log();
  tableData = [];

  let items = {
    product: content[0].itemDesc,
    quantity: content[0].itemQuantity,
    price: content[0].itemPrice,
    total: 0
  };
  let priceToNumber = parseInt(items.price);
  let quantityToNumber = parseInt(items.quantity);
  total = priceToNumber * quantityToNumber;

  tableData.push(items);
  // log(total);
  // startinng  the table

  let test = document.createElement('div');
  // let s = 0;

  // adding the data to the table
  for (let user of tableData) {
    // log(test);

    cartDiv.appendChild(test);
    test.innerHTML =
      '<p>' +
      user.product +
      '</p>' +
      '<p>' +
      user.quantity +
      '</p>' +
      '<p>' +
      '£' +
      user.price +
      '</p>';

    // console.log(document.getElementsByClassName('te'));
  }

  let totalDiv = document.querySelector('#total');
  for (let tot of tableData) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let txt = document.createTextNode(total);
    p.appendChild(txt);
    div.appendChild(p);
    totalDiv.appendChild(div);
    let pNumber = parseInt(p.innerText);
    // log(pNumber);

    log(totalDiv);
  }
}

// setTimeout(te, 3000);

function te() {
  let s = document.querySelectorAll('total');
  let sumVal = 0;

  for (i = 0; i < 5; i++) {
    log('test');
  }
}

cartImg.addEventListener('click', function() {
  $('#cart-info').toggle();
  $('#cart-table').css('background-color', '#adcee9');
});
// update cart function
// function updateCartTotal()
// {
//  let cartItemContainer = document.querySelectorAll('#table-data');
// let finalTotal = 0;
// for (i = 0; i < cartItemContainer.length; i++) {
//   let cartData = cartItemContainer[i];
//   let priceElement =
//     event.target.parentElement.children[1].children[2].innerText;
//   let quantityElement =
//     event.target.parentElement.children[1].children[1].value;
//   // log(priceElement, quantityElement);
//   let priceNumber = parseInt(priceElement);
//   let quantityNumber = parseInt(quantityElement);
//   finalTotal = finalTotal + total[i];
//   $('#cart-total').html(finalTotal);
// log(finalTotal);
// }
// }

// let main = document.querySelectorAll('#item p');
// // console.log(main);

// sumVal = 0;
// for (i = 0; i < main.length; i++) {
//   let r = main[i].innerHTML;
//   sumVal = sumVal + parseInt(r);
//   console.log(sumVal);
// }
