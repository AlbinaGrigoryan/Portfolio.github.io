$(function () {
    var cartArray = [];
    $('input[name=quantity]').on('input', function () {
        // get data
        var qnt =  Number($(this).val()),
            id = $(this).data("id");
        
        // elements
        var trElem = $('tr[data-id=' + id + ']'),
            price = trElem.find('.price'),
            totalPrice = trElem.find('.totalPrice'),
            deliveryPrice = $('.deliveryPrice'),
            cartPrice = $('.cartPrice');
        
        // product total price
        var productPrice = Number(price.text());
        var productTotalPrice = qnt * productPrice;
        totalPrice.html(productTotalPrice);
        
        // products total price
        var productsTotalPrice = 0,
            deliveryPrice = Number(deliveryPrice.text());
        $('.totalPrice').each(function() {
            productsTotalPrice += Number($(this).text());
        });
        
        // cart price
        var cartPriceTotal = productsTotalPrice + deliveryPrice;
        if (productsTotalPrice == 0) {
            cartPrice.html('');
        } else {
            cartPrice.html(cartPriceTotal);
        }
        
        // product
        var productObject = new Object();
        
        productObject.id = id;
        productObject.quantity = qnt;
        productObject.price = productPrice;
                
        cartArray.push(productObject);
        console.log(cartArray);
        
         
        if(cartArray.length != 0) {
            for(i = 0; i < cartArray.length; i++){
                for(j = 0; j < cartArray[i].length; j++){
//                    if(cartArray[i][j] == )
                    console.log(cartArray[i][j].val());
                }               
            }
        }
    });
});