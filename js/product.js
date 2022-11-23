const products = document.querySelectorAll('.product');

if (products) {
    products.forEach(el => {
        let cuurentProduct = el;
        const imageSwitchItems = cuurentProduct.querySelectorAll('.image-switch__item');
        const imagePagination = cuurentProduct.querySelector('.image-pagination');
        if (imageSwitchItems.length > 1) {
            imageSwitchItems.forEach((el, index) => {

                el.setAttribute('data-index', index);
                imagePagination.innerHTML += `<li class="image-pagination__item ${index == 0 ? 'image - pagination__item--active' : ''}" data-index = "${index}"></li>`;
                el.addEventListener('mouseenter', (e) => {
                    cuurentProduct.querySelectorAll(".image-pagination__item").forEach(el => {el.classList.remove('image-pagination__item--active')});

                    cuurentProduct.querySelector(`.image-pagination__item[data-index="${e.currentTarget.dataset.index}"]`).classList.add('image-pagination__item--active');
                });
                el.addEventListener('mouseleave', (e) => {
                    cuurentProduct.querySelectorAll(".image-pagination__item").forEach(el => {el.classList.remove('image-pagination__item--active')});

                    cuurentProduct.querySelector(`.image-pagination__item[data-index="0"]`).classList.add('image-pagination__item--active');
                });
            });
        };
    });
};