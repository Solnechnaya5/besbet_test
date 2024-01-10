document.addEventListener("DOMContentLoaded", function () {
    const titleElements = document.querySelectorAll(".product-title");
    const productPic = document.querySelector(".product-pic");
    const price = document.querySelector(".price-big");
    const priceMonets = document.querySelector(".price-small");
    const discounts = document.querySelectorAll(".price-discount__big");
    const discountsMonets = document.querySelectorAll(".price-discount__small");

    fetch('source.json')
        .then(response => response.json())
        .then(data => {
            const product = data[0];
            titleElements.forEach(titleElement => {
                titleElement.textContent = product.name;
            });
            
            price.textContent = product.price;
            priceMonets.textContent = product.price2;

            discounts.forEach(discount => {
                discount.textContent = product.discount;
            });
            discountsMonets.forEach(discountMonets => {
                discountMonets.textContent = product.discount2;
            });
            productPic.src= product.prodImage;
        })
        .catch(error => console.error('Помилка при завантаженні даних:', error));
});