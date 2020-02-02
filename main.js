let cartImg = document.querySelector('#cart-img');
// let cartTable = document.querySelector('#cart-table');
// let cartRow = document.querySelector('#cart-row');
// let cartRowData = document.querySelector('#cartrow-data');
// let tableBody = document.querySelector('tbody');
let itemDesc = document.querySelectorAll('.item-desc');
let itemQuan = document.querySelectorAll('#table-input');
let itemPrice = document.querySelectorAll('.item-price');
let cartBtn = document.querySelectorAll('#cart-btn');

let log = console.log;

//changing it an array
// let itemQuanArr = Array.prototype.slice.call(itemQuan);
// let itemPriceArr = Array.prototype.slice.call(itemPrice);
// let itemDescArr = Array.prototype.slice.call(itemDesc);

cartBtn.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    updateCart();
    
  });
});

function updateCart() {

  for (i = 0; i < itemQuan.length; i++) {
    let quanResult = itemQuan[i]
    if (isNaN(quanResult.value) || quanResult.value <= 0) {
      itemQuan.value = 1
    }
  }
  let addInfo1 = event.target.parentElement.children[1].children[0].textContent;
  // let addInfo2 = event.target.parentElement.children[1].children[1].value ;
  // let addInfo3 = event.target.parentElement.children[1].children[2].textContent;
  // addInfo3 = parseInt(addInfo3);
  // let poundSign = (document.querySelectorAll('.item-price span').textContent =
  // '£');
  // subTotal = addInfo3 * addInfo2
  // addInfo3 = poundSign + addInfo3;
  // total = poundSign + total;
  
  //final price code
  let tableData = []

  let items = function (product, quantity, price, total) {
    this.product = addInfo1
    this.quantity = updatePrice()
    this.price = updatePrice()
    this.total = finalPrice
  }
  
  tableData.push(new items)
  // startinng  the table
  let tbl = document.querySelector('#cart-table')
  let row = tbl.insertRow()
  //adding the data to the table
  for (let user of tableData) {
    let cartList = row.innerHTML =
      '<td>' + user.product + '</td>' +
      '<td>' + user.quantity + '</td>' +
      '<td>' + '£' + user.price + '</td>' +
      '<td>' + user.total + '</td>';
    // console.log(cartList)
    // log()
  }

}


cartImg.addEventListener('click', function() {
  $('#cart-info').toggle();
  $('#cart-table').css('background-color', '#adcee9');
});


function updatePrice() {
  let cartContainer = document.getElementsByClassName('item-paras')
  finalPrice = 0
  for (i = 0; i < cartContainer.length; i++){
    let cartRow = cartContainer[i]
    let priceELement = cartRow.getElementsByClassName('item-price')[0]
    let quantityElement = cartRow.getElementsByClassName('table-input')[0]

    let price = parseInt(priceELement.innerText)
    let quantity = quantityElement.value
    finalPrice = finalPrice + (price * quantity)
    log(finalPrice)
  }
}
// updatePrice()
// for (i = 0; i < itemPriceArr.length; i++) {
//     let itemPriceTxt = itemPriceArr[i].innerHTML;
//     let itemQuanTxt = itemQuanArr[i].value;
//     let itemDescTxt = itemDescArr[i].innerHTML;
//   }

