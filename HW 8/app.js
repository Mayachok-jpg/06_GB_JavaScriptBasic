'use strict';

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});

let productCards = document.querySelectorAll('.featuredImgDark');
let addToCardButton;
let cartSpan = document.querySelector('.cartIconWrap').querySelector('span');
let productData;
productCards.forEach(function name(productCard) {
    addToCardButton = productCard.querySelector('button')
    addToCardButton.addEventListener('click', function () {
        cartSpan.innerHTML = parseInt(cartSpan.innerText) + 1;
        productData = this.parentElement.parentNode.parentNode.querySelector('.featuredData');
        //alert(this.parentElement.parentNode.parentNode.querySelector('.featuredData').querySelector('.featuredName').innerText);
        alert(productData.querySelector('.featuredName').innerText + ' ' + productData.querySelector('.featuredPrice').innerText + ' ' + parseFloat(productData.querySelector('.featuredPrice').innerText.split('$')[1]));

    })

})
