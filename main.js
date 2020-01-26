let cartImg = document.querySelector('#cart-img')
let cartTable = document.querySelector('#cart-table')
let cartRow = document.querySelector('#cart-row')
let cartRowData = document.querySelector('#cartrow-data')
let tableBody = document.querySelector('tbody')
let itemDesc = document.querySelectorAll('.item-desc')
let itemPrice = document.querySelectorAll('.item-price')



let cartBtn = document.querySelectorAll('#cart-btn')

for (i = 0; i < cartBtn.length; i++){
    cartBtn[i].addEventListener('click', function () {
   

    })
}

function addToCart() {
    
    let tableHead = 4;
    if (tableHead === 4) {
        for (i = 0; i < 4; i++){

            let product = document.createElement('th').textContent = 'product'
            let quantity = document.createElement('th')
            let price = document.createElement('th')
            let total = document.createElement('th')
            
            let tHead = document.createElement('th')
            let txt = document.createTextNode('')
            tHead.appendChild(txt)
            cartRow.appendChild(tHead)
            tableBody.appendChild(cartRow)
            // console.log(spli)
        }

    }

    for (i = 0; i < itemDesc.length; i++){
        let choiceDesc = itemDesc[i]
        let listDesc = [];
        listDesc.push(choiceDesc.innerText)

        let choicePrice = itemPrice[i]
        let listPrice = [];
        listPrice.push(choicePrice.innerText)
        
        let tabelData = document.createElement('td')
        let txt = document.createTextNode(listDesc)
        tabelData.appendChild(txt)
        cartRowData.appendChild(tabelData)
        tableBody.appendChild(cartRowData)
        cartTable.appendChild(tableBody)
        // console.log(cartTable)
    }
}
addToCart()

cartImg.addEventListener('click', function () {
    $('#cart-info').toggle()
    $('#cart-table').css('background-color', '#adcee9')
})



