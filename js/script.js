




// *****************************************
// Triggers / Events
// ***************************************** 
// Add item


$(document).ready(function () {
  window.setTimeout('fadeout();', 3000);
  $(".wholebody").hide();
  //   ----------------ADDING ITEM TO CART CODE----------------------

  $('.add-to-cart').click(function (event) {
    event.preventDefault();
    let name = $(this).data('name');
    let price = Number($(this).data('price'));
    let img = $(this).data('img');

    shoppingCart.addItemToCart(name, price, 1, img);
    displayCart();
  });

  // ------------------CLEAR ITEMS----------------
  $('.clear-cart').click(function () {
    shoppingCart.clearCart();

    displayCart();
  });

  // ----------------DELETE AN ITEM IN CART CODE-----------------------

  $('.show-cart').on("click", ".delete-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })


  // ----------------- -1 ITEM IN THE CART --------------------------
  $('.show-cart').on("click", ".minus-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // ------------------ +1 ITEM IN THE CART --------------------------
  $('.show-cart').on("click", ".plus-item", function (event) {
    let name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })

  // --------------------------ITEM COUNT INPUT CODE--------------
  $('.show-cart').on("change", ".item-count", function (event) {
    let name = $(this).data('name');
    let count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  displayCart();
  // ------------------------ADD TO WISHLIST CODE-----------------------
  $('.add-to-list').click(function (event) {
    event.preventDefault();
    let name = $(this).data('name');
    let img = $(this).data('img');
    let price = Number($(this).data('price'));

    wishList.addItemToList(name, price, 1, img);
    displayList();
  });

  // ------------------------CLEAR WISH LIST CODE ----------------------
  $('.clear-item').click(function () {
    wishList.clearList();
    $(".inner1_5").hide();
    $(".inner1").show();
    $(".inner2_5").hide();
    $(".inner2").show();
    $(".inner3_5").hide();
    $(".inner3_5").hide();
    $(".inner3").show();
    $(".inner4_5").hide();
    $(".inner4").show();
    $(".inner5_5").hide();
    $(".inner5").show();
    $(".inner6_5").hide();
    $(".inner6").show();
    $(".inner7_5").hide();
    $(".inner7").show();
    $(".inner8_5").hide();
    $(".inner8").show();
    $(".inner9_5").hide();
    $(".inner9").show();
    $(".inner10_5").hide();
    $(".inner10").show();
    $(".inner11_5").hide();
    $(".inner11").show();
    $(".inner12_5").hide();
    $(".inner12").show();
    $(".inner13_5").hide();
    $(".inner13").show();
    $(".inner14_5").hide();
    $(".inner14").show();
    $(".inner15_5").hide();
    $(".inner15").show();
    $(".inner16_5").hide();
    $(".inner16").show();
    $(".inner17_5").hide();
    $(".inner17").show();
    $(".inner18_5").hide();
    $(".inner18").show();
    $(".inner19_5").hide();
    $(".inner19").show();
    $(".inner20_5").hide();
    $(".inner20").show();
    $(".inner21_5").hide();
    $(".inner21").show();
    $(".inner22_5").hide();
    $(".inner22").show();
    $(".inner23_5").hide();
    $(".inner23").show();
    displayList();
  });

  // ----------------DELETE AN ITEM FROM THE WISHLIST-----------------------

  $('.show-list').on("click", ".delete-item", function (event) {
    let name = $(this).data('name')
    wishList.removeItemFromListAll(name);
    displayList();
  })

  //  ------------------ADD AN ITEM TO THE CART FROM THE WISHLIST----------------------
  $('.show-list').on("click", ".cartWish", function (event) {
    event.preventDefault();
    let name = $(this).data('name');
    let img = $(this).data('img');
    let price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1, img);
    displayCart();
  })

  // -------------------------CLEAR WISHLIST--------------------------------
  $('.show-list').on("click", ".delete-item", function (event) {
    let name = $(this).data('name')

    wishList.removeItemFromList(name);
    displayList();
  })
  $('.delete-item2').click(function () {
    let name = $(this).data('name')

    wishList.removeItemFromList(name);
    displayList();
  })

  // -------------------WISHLIST ITEM COUNT--------------------------
  $('.show-list').on("change", ".item-count", function (event) {
    let name = $(this).data('name');
    let count = Number($(this).val());
    wishList.setCountForItemOfList(name, count);
    displayList();
  });
  displayList();

  // ----------------CODE TO PREVIEW PRODUCT--------------------
  $('.dress-card-img-top').click(function (event) {
    event.preventDefault();
    let name = $(this).data('name');
    let price = Number($(this).data('price'));
    let img = $(this).data('img');
    let description = $(this).data('description');
    let code = $(this).data('code');

    prodPreview.addItemToPrev(name, price, 1, img, description, code);
    displayDescription();
    prodPreview.clearList();

  });

  // ----------------ADDING ITEM TO CART FROM PREVIEW--------------------

  $('.modal-bodydesc').on("click", ".add-to-cart", function (event) {
    event.preventDefault();
    let name = $(this).data('name');
    let img = $(this).data('img');
    let price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1, img);
    displayCart();
  })

  // ------------------FUNCTION TO DISPLAY CART ON MODAL ----------------
  function displayCart() {
    let cartArray = shoppingCart.listCart();
    let output = "";
    for (let i in cartArray) {
      output += "<tr>"
        + "<td><img class'cart-img img-fluid' style='height: 120px; width: 120px;' src=" + cartArray[i].img + ">"
        + "<td>" + cartArray[i].name + "</td>"
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='text' disabled class='item-count form-control'   data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button class='delete-item btn btn-outline-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = "
        + "<td>" + cartArray[i].total + "</td>"
        + "</tr>";
        + "<hr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }

  // ------------------ FUNCTION TO DISPLAY WISHLIST------------------------ 
  function displayList() {
    let cartArray = wishList.listList();

    let output = "";
    for (let i in cartArray) {
      output += "<tbody>"
        + '<tr>'
        + '<td width="35%">'
        + '<div class="display-flex align-center" style="width: 100px;">'
        + '<div class="img-product">'
        + '<img class"wish-img" style="height: 120px; width: 100px;" src="' + cartArray[i].img + '">'
        + '</div>'
        + '</td>'
        + '<td width="30%">'
        + '<div class="name-product" style ="font-size: 15px; color: #484848; padding-top: 8px; line-height: 24px;">' + cartArray[i].name + '</div>'
        + '</div>'
        + '</td>'
        + '<td width="15%" class="price" style ="font-weight: 600; padding-top: 16px; line-height: 24px;">$' + cartArray[i].price + '</td>'
        + '<td width="30%"><button class="btn btn-outline-success add-to-cart cartWish" data-name=' + cartArray[i].name + ' data-price=' + cartArray[i].price + ' data-img=' + cartArray[i].img + '>Add to Cart</button></td>'
        + '<td width="10%" class="text-center "><span class="trash-icon"><i style = "padding-top: 6px; line-height: 24px;" class="fa-solid fa-trash fa-xl delete-item" data-name=' + cartArray[i].name + '></i></span></td>'
        + "<hr>";

    }
    $('.show-list').html(output);
    $('.total-list').html(wishList.totalList());
    $('.total-countList').html(wishList.totalCountOfList());
  }

  // ------------------PREVIEW CODE--------------------
  function displayDescription() {
    let cartArray = prodPreview.listPrev();
    let output = "";
    for (let i in cartArray) {
      output += '<div class="product-showcase">'
        + '<div>'
        + '<img class="prod" src="' + cartArray[i].img + '" alt="">'
        + '</div>'
        + '<div>'
        + '<b>'
        + '<h1>' + cartArray[i].name + '</h1>'
        + '</b>'
        + '<br>'
        + '<h1>$' + cartArray[i].price + '</h1>'
        + '<br><br>'
        + '<hr>'
        + '<p>' + cartArray[i].description + '</p>'
        + '<br><br>'
        + '<p>'
        + '<div><b>Size:</b></div>'
        + '<div class="sizes">'
        + '<div class="form-check form-check-inline">'
        + '<input class="form-check-input" type="radio" name="inlineRadioOptions"'
        + 'id="inlineRadio" value="S">'
        + '<label class="form-check-label" for="inlineRadio">S</label>'
        + '</div>'
        + '<div class="form-check form-check-inline">'
        + '<input class="form-check-input" type="radio" name="inlineRadioOptions"'
        + 'id="inlineRadio" value="M">'
        + '<label class="form-check-label" for="inlineRadio">M</label>'
        + '</div>'
        + '<div class="form-check form-check-inline">'
        + '<input class="form-check-input" type="radio" name="inlineRadioOptions"'
        + 'id="inlineRadio" value="L">'
        + '<label class="form-check-label" for="inlineRadio">L </label>'
        + '</div>'
        + '<div class="form-check form-check-inline">'
        + '<input class="form-check-input" type="radio" name="inlineRadioOptions"'
        + 'id="inlineRadio" value="XL">'
        + '<label class="form-check-label" for="inlineRadio">XL </label>'
        + '</div>'
        + '<div class="form-check form-check-inline">'
        + '<input class="form-check-input" type="radio" name="inlineRadioOptions"'
        + 'id="inlineRadio5" value="XXL">'
        + '<label class="form-check-label" for="inlineRadio">XXL</label>'
        + '</div>'
        + '</div>'
        + '</p>'
        + '<hr>'
        + '<p>'
        + '<span><strong>PRODUCT CODE:</strong> ' + cartArray[i].code + '</span>'
        + '</p>'
        + '<div class="paramodal">'
        + '<div data-name="' + cartArray[i].name + '" data-price="' + cartArray[i].price + '"'
        + 'data-img="' + cartArray[i].img + '"'
        + 'class="add-to-cart modalbtn btn btn-outline-secondary">Add to Cart'
        + '</div>'
        + '</div>'
        + '</div>'
        + '</div>'
        + '<style>.product-showcase{max-width: 1200px; width: 100%; margin: 0 auto; display: grid;gap: 0.5rem; grid-template-columns: repeat(2, 1fr);}'
        + '.sizes{max-width: 1200px;width: 100%;margin: 0 auto;display: grid;gap: 0.5rem;grid-template-columns: repeat(5, 1fr);}.prod{ width: 400px;}'
        + '@media (max-width: 750px) {.prod { width: 100%; }.sizes {grid-template-columns: repeat(5, 1fr);}.product-showcase {grid-template-columns: repeat(1, 1fr);}}'
        + '@media (width: 768px) { .prod {width: 100%;} .product-showcase {grid-template-columns: repeat(1, 1fr);}}'
        + '@media (width: 810px) {.prod {width: 100%;}.product-showcase {grid-template-columns: repeat(1, 1fr);}}'
        + '@media (width: 1024px) {.prod {width: 400px;}}'
        + '@media (max-width: 370px) {.prod {width: 100%;}}'
        + '</style>'
    }
    $('.modal-bodydesc').html(output);
  }

  //  ------------------ADDING AND REMOVING BUTTON FOR WISHLIST-----------------------
  $(".inner1").click(function () {
    $(".inner1").hide();
    $("span.inner1_5").show();
  });
  $("span.inner1_5").click(function () {
    $(".inner1_5").hide();
    $(".inner1").show();
  });
  $(".inner2").click(function () {
    $(".inner2").hide();
    $("span.inner2_5").show();
  });
  $("span.inner2_5").click(function () {
    $(".inner2_5").hide();
    $(".inner2").show();
  });
  $(".inner3").click(function () {
    $(".inner3").hide();
    $("span.inner3_5").show();
  });
  $("span.inner3_5").click(function () {
    $(".inner3_5").hide();
    $(".inner3").show();
  });
  $(".inner4").click(function () {
    $(".inner4").hide();
    $("span.inner4_5").show();
  });
  $("span.inner4_5").click(function () {
    $(".inner4_5").hide();
    $(".inner4").show();
  });
  $(".inner5").click(function () {
    $(".inner5").hide();
    $("span.inner5_5").show();
  });
  $("span.inner5_5").click(function () {
    $(".inner5_5").hide();
    $(".inner5").show();
  });
  $(".inner6").click(function () {
    $(".inner6").hide();
    $("span.inner6_5").show();
  });
  $("span.inner6_5").click(function () {
    $(".inner6_5").hide();
    $(".inner6").show();
  });
  $(".inner7").click(function () {
    $(".inner7").hide();
    $("span.inner7_5").show();
  });
  $("span.inner7_5").click(function () {
    $(".inner7_5").hide();
    $(".inner7").show();
  });
  $(".inner8").click(function () {
    $(".inner8").hide();
    $("span.inner8_5").show();
  });
  $("span.inner8_5").click(function () {
    $(".inner8_5").hide();
    $(".inner8").show();
  });
  $(".inner9").click(function () {
    $(".inner9").hide();
    $("span.inner9_5").show();
  });
  $("span.inner9_5").click(function () {
    $(".inner9_5").hide();
    $(".inner9").show();
  });
  $(".inner10").click(function () {
    $(".inner10").hide();
    $("span.inner10_5").show();
  });
  $("span.inner10_5").click(function () {
    $(".inner10_5").hide();
    $(".inner10").show();
  });
  $(".inner11").click(function () {
    $(".inner11").hide();
    $("span.inner11_5").show();
  });
  $("span.inner11_5").click(function () {
    $(".inner11_5").hide();
    $(".inner11").show();
  });
  $(".inner12").click(function () {
    $(".inner12").hide();
    $("span.inner12_5").show();
  });
  $("span.inner12_5").click(function () {
    $(".inner12_5").hide();
    $(".inner12").show();
  });
  $(".inner13").click(function () {
    $(".inner13").hide();
    $("span.inner13_5").show();
  });
  $("span.inner13_5").click(function () {
    $(".inner13_5").hide();
    $(".inner13").show();
  });
  $(".inner14").click(function () {
    $(".inner14").hide();
    $("span.inner14_5").show();
  });
  $("span.inner14_5").click(function () {
    $(".inner14_5").hide();
    $(".inner14").show();
  });
  $(".inner15").click(function () {
    $(".inner15").hide();
    $("span.inner15_5").show();
  });
  $("span.inner15_5").click(function () {
    $(".inner15_5").hide();
    $(".inner15").show();
  });
  $(".inner16").click(function () {
    $(".inner16").hide();
    $("span.inner16_5").show();
  });
  $("span.inner16_5").click(function () {
    $(".inner16_5").hide();
    $(".inner16").show();
  });
  $(".inner17").click(function () {
    $(".inner17").hide();
    $("span.inner17_5").show();
  });
  $("span.inner17_5").click(function () {
    $(".inner17_5").hide();
    $(".inner17").show();
  });
  $(".inner18").click(function () {
    $(".inner18").hide();
    $("span.inner18_5").show();
  });
  $("span.inner18_5").click(function () {
    $(".inner18_5").hide();
    $(".inner18").show();
  });
  $(".inner19").click(function () {
    $(".inner19").hide();
    $("span.inner19_5").show();
  });
  $("span.inner19_5").click(function () {
    $(".inner19_5").hide();
    $(".inner19").show();
  });
  $(".inner20").click(function () {
    $(".inner20").hide();
    $("span.inner20_5").show();
  });
  $("span.inner20_5").click(function () {
    $(".inner20_5").hide();
    $(".inner20").show();
  });
  $(".inner21").click(function () {
    $(".inner21").hide();
    $("span.inner21_5").show();
  });
  $("span.inner21_5").click(function () {
    $(".inner21_5").hide();
    $(".inner21").show();
  });
  $(".inner22").click(function () {
    $(".inner12").hide();
    $("span.inner12_5").show();
  });
  $("span.inner22_5").click(function () {
    $(".inner22_5").hide();
    $(".inner22").show();
  });
  $(".inner23").click(function () {
    $(".inner23").hide();
    $("span.inner23_5").show();
  });
  $("span.inner23_5").click(function () {
    $(".inner23_5").hide();
    $(".inner23").show();
  });
  


  // ---------------VIEW ALL PRODUCTS INFO TRIGGER----------------
  $(".view").click(function () {
    showInfoAlert();
  })







  // ADDING AND REMOVING FROM CART NOTIFICATION
  $(".inner1").click(function () {

    showSuccessAlert();

  })
  $(".inner1_5").click(function () {

    showError();

  })
  $(".inner2").click(function () {

    showSuccessAlert();

  })
  $(".inner2_5").click(function () {

    showError();

  })
  $(".inner3").click(function () {

    showSuccessAlert();

  })
  $(".inner3_5").click(function () {

    showError();

  })
  $(".inner4").click(function () {

    showSuccessAlert();

  })
  $(".inner4_5").click(function () {

    showError();

  })
  $(".inner5").click(function () {

    showSuccessAlert();

  })
  $(".inner5_5").click(function () {

    showError();

  })
  $(".inner6").click(function () {

    showSuccessAlert();

  })
  $(".inner6_5").click(function () {

    showError();

  })
  $(".inner7").click(function () {

    showSuccessAlert();

  })
  $(".inner7_5").click(function () {

    showError();

  })
  $(".inner8").click(function () {

    showSuccessAlert();

  })
  $(".inner8_5").click(function () {

    showError();

  })
  $(".inner9").click(function () {

    showSuccessAlert();

  })
  $(".inner9_5").click(function () {

    showError();

  })
  $(".inner10").click(function () {

    showSuccessAlert();

  })
  $(".inner10_5").click(function () {

    showError();

  })
  $(".inner11").click(function () {

    showSuccessAlert();

  })
  $(".inner11_5").click(function () {

    showError();

  })
  $(".inner12").click(function () {

    showSuccessAlert();

  })
  $(".inner12_5").click(function () {

    showError();

  })
  $(".inner13").click(function () {

    showSuccessAlert();

  })
  $(".inner13_5").click(function () {

    showError();

  })
  $(".inner14").click(function () {

    showSuccessAlert();

  })
  $(".inner14_5").click(function () {

    showError();

  })
  $(".inner15").click(function () {

    showSuccessAlert();

  })
  $(".inner15_5").click(function () {

    showError();

  })
  $(".inner16").click(function () {

    showSuccessAlert();

  })
  $(".inner16_5").click(function () {

    showError();

  })
  $(".inner17").click(function () {

    showSuccessAlert();

  })
  $(".inner17_5").click(function () {

    showError();

  })
  $(".inner18").click(function () {

    showSuccessAlert();

  })
  $(".inner18_5").click(function () {

    showError();

  })
  $(".inner19").click(function () {

    showSuccessAlert();

  })
  $(".inner19_5").click(function () {

    showError();

  })
  $(".inner20").click(function () {

    showSuccessAlert();

  })
  $(".inner20_5").click(function () {

    showError();

  })
  $(".inner21").click(function () {

    showSuccessAlert();

  })
  $(".inner21_5").click(function () {

    showError();

  })
  $(".inner22").click(function () {

    showSuccessAlert();

  })
  $(".inner22_5").click(function () {

    showError();

  })
  $(".inner23").click(function () {

    showSuccessAlert();

  })
  $(".inner23_5").click(function () {

    showError();

  })



  // REVIEW CAROUSEL
  jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1170: {
            items: 1
          }
        }
    });
  });



  
  
});







