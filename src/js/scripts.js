// Your code here...

var formProduct = document.getElementById('form-product');
const optionClickClass = 'option_click';

formProduct.addEventListener('click', function (event) {
    var target = event.target;
    while (target != this) {
        if (target.className == 'option-content__item') {
            var targetBlock = findOptionBlock(target);
            var selectOptions = targetBlock.getElementsByClassName(optionClickClass);
            for (var i = 0; i < selectOptions.length; i++) {
                selectOptions[i].classList.remove(optionClickClass);
            }

            selectOption(target);
            return;
        }
        target = target.parentNode;
    }
});
function selectOption(node) {
    var data = node.dataset;
    var option = node.getElementsByClassName('option')[0];
    option.classList.add(optionClickClass);
    if (data.src) {
        var imgElement = document.getElementsByClassName('product-box__product-img')[0];
        imgElement.src = data.src;
    }
}
function findOptionBlock(option) {
    var optionBlock = option.parentNode ;
    while (optionBlock != formProduct) {
        if (optionBlock.classList.contains('product-option__content')) {
            return optionBlock;
        }
        optionBlock = optionBlock.parentNode;
    }
}
