let cartImg = document.querySelector('#cart-img');
// let cartTable = document.querySelector('#cart-table');
// let cartRow = document.querySelector('#cart-row');
// let cartRowData = document.querySelector('#cartrow-data');
// let tableBody = document.querySelector('tbody');
let t1 = document.querySelector('#t1');
let t2 = document.querySelector('#t2');
let t3 = document.querySelector('t3');
let t4 = document.querySelector('t4');
let itemDesc = document.querySelectorAll('.item-desc');
let itemQuan = document.querySelectorAll('#table-input');
let itemPrice = document.querySelectorAll('.item-price');
let cartBtn = document.querySelectorAll('#cart-btn');

//changing it an array
let itemQuanArr = Array.prototype.slice.call(itemQuan);
let itemPriceArr = Array.prototype.slice.call(itemPrice);
let itemDescArr = Array.prototype.slice.call(itemDesc);

cartBtn.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    updateCart();
  });
});

function updateCart() {
  let addInfo1 = event.target.parentElement.children[1].children[0].textContent;
  let addInfo2 = event.target.parentElement.children[1].children[1].value;
  let addInfo3 = event.target.parentElement.children[1].children[2].textContent;
  addInfo3 = parseInt(addInfo3);
  let poundSign = (document.querySelectorAll('.item-price span').textContent =
    '£');
  let total = addInfo3 * addInfo2;
  addInfo3 = poundSign + addInfo3;
  total = poundSign + total;

  // console.log(addInfo3);

  // startinng  the table
  let tableArr = ['Products', 'Quantity', 'Price', ' Total'];
  let tableData = [addInfo1, addInfo2, addInfo3, total];
  //creating a header for the table
  let perHeader = 4,
    html = '<table><tr>';

  for (i = 0; i < tableArr.length; i++) {
    html += '<th>' + tableArr[i] + '</th>';
    let nextHead = i + 1;
    if (nextHead % perHeader == 0 && nextHead != tableArr.length) {
      html += '</tr><tr>';
    }
  }

  //adding the data to the table
  let perRow = 4;
  html += '<tr>';

  for (r = 0; r < tableData.length; r++) {
    html += '<td>' + tableData[r] + '</td>';
    let nextRow = r + 1;
    if (nextRow % perRow == 0 && nextRow != tableData.length) {
      html += '</tr><tr>';
    }
  }
  console.log(html);
  document.getElementById('cart-info').innerHTML = html;
}

cartImg.addEventListener('click', function() {
  $('#cart-info').toggle();
  $('#cart-table').css('background-color', '#adcee9');
});

// for (i = 0; i < itemPriceArr.length; i++) {
//     let itemPriceTxt = itemPriceArr[i].innerHTML;
//     let itemQuanTxt = itemQuanArr[i].value;
//     let itemDescTxt = itemDescArr[i].innerHTML;
//   }
