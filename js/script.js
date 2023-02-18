

let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
let accessArrow = document.querySelector(".access-arrow");
accessArrow.onclick = function () {
  navLinks.classList.toggle("show4");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}

let x = window.matchMedia("(max-width: 920px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
function myFunction(x) {
  if (x.matches) { // If media query matches
    $(".mob-search").show();
  } else {
    $(".mob-search").hide();
  }
}
let y = window.matchMedia("(max-width: 920px)")
myFunction(y) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
function myFunction(y) {
  if (y.matches) { // If media query matches
    $(".wish-mob").show();
  } else {
    $(".wish-mob").hide();
  }
}

function showError() {
  Swal.fire({
    icon: 'error',
    title: '',
    text: 'This Item has been removed from your wishlist '
  })
}
function showSuccessAlert() {
  Swal.fire(
    'Congratulations!',
    'This Item has been added to your wishlist!',
    'success'
  )
}


$(document).ready(function () {
  

});



let shoppingCart = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  cart = [];
  
  // Constructor
  function Item(name, price, count, img) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.img = img;
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  let obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count, img) {
    for(let item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    let item = new Item(name, price, count, img);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(let i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(let item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(let item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    let totalCount = 0;
    for(let item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    let totalCart = 0;
    for(let item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    let cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


let wishList = (function() {
  // =============================
  // Private methods and propeties
  // =============================
  list = [];
  
  // Constructor
  function Item(name, price, count, img) {
    this.name = name;
    this.price = price;
    this.count = count;
    this.img = img;
    }
  
  // Save cart
  function saveList() {
    sessionStorage.setItem('wishList', JSON.stringify(list));
  }
  
    // Load cart
  function loadList() {
    list = JSON.parse(sessionStorage.getItem('wishList'));
  }
  if (sessionStorage.getItem("wishList") != null) {
    loadList();
  }
  

  // =============================
  // Public methods and propeties
  // =============================
  let listsInWish = {};
  
  // Add to cart
  listsInWish.addItemToList = function(name, price, count, img) {
    for(let item in list) {
      if(list[item].name === name) {
        list[item].count ++;
        saveList();
        return;
      }
    }
    let item = new Item(name, price, count, img);
    list.push(item);
    saveList();
  }
  // Set count from item
  listsInWish.setCountForItemOfList = function(name, count) {
    for(let i in list) {
      if (list[i].name === name) {
        list[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  listsInWish.removeItemFromList = function(name) {
      for(let item in list) {
        if(list[item].name === name) {
          list[item].count --;
          if(list[item].count === 0) {
            list.splice(item, 1);
          }
          break;
        }
    }
    saveList();
  }

  // Remove all items from cart
  listsInWish.removeItemFromListAll = function(name) {
    for(let item in cart) {
      if(list[item].name === name) {
        list.splice(item, 1);
        break;
      }
    }
    saveList();
  }

  // Clear cart
  listsInWish.clearList = function() {
    list = [];
    saveList();
  }

  // Count cart 
  listsInWish.totalCountOfList = function() {
    let totalOfList = 0;
    for(let item in list) {
      totalOfList += list[item].count;
    }
    return totalOfList;
  }

  // Total cart
  listsInWish.totalList = function() {
    let totalList = 0;
    for(let item in list) {
      totalList += list[item].price * list[item].count;
    }
    return Number(totalList.toFixed(2));
  }

  // List cart
  listsInWish.listList = function() {
    let listCopy = [];
    for(i in list) {
      item = list[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      listCopy.push(itemCopy)
    }
    return listCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return listsInWish;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$(document).ready(function () {
});


$(document).ready(function () {
  $('.add-to-cart').click(function(event) {
    event.preventDefault();
    let name = $(this).data('name');
    let price = Number($(this).data('price'));
    let img = $(this).data('img');
    shoppingCart.addItemToCart(name, price, 1, img);
    displayCart();
  });
  
  // Clear items
  $('.clear-cart').click(function() {
    shoppingCart.clearCart();
    displayCart();
  });
  
  
  
  function displayCart() {
    let cartArray = shoppingCart.listCart();
    let output = "";
    for(let i in cartArray) {
      output += "<tr>"
        + "<td><img class'cart-img' style='height: 120px; width: 120px;' src="+cartArray[i].img+">"
        + "<td>" + cartArray[i].name + "</td>" 
        + "<td>(" + cartArray[i].price + ")</td>"
        + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
        + "<input type='text' disabled class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
        + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
        + "<td><button class='delete-item btn btn-outline-danger' data-name=" + cartArray[i].name + ">X</button></td>"
        + " = " 
        + "<td>" + cartArray[i].total + "</td>" 
        +  "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.total-count').html(shoppingCart.totalCount());
  }
  
  // Delete item button
  
  $('.show-cart').on("click", ".delete-item", function(event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
  })
  
  
  // -1
  $('.show-cart').on("click", ".minus-item", function(event) {
    let name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  })
  // +1
  $('.show-cart').on("click", ".plus-item", function(event) {
    let name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  })
  
  // Item count input
  $('.show-cart').on("change", ".item-count", function(event) {
     let name = $(this).data('name');
     let count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
  
  displayCart();
  $('.add-to-list').click(function(event) {
    event.preventDefault();
    let name = $(this).data('name');
    let img = $(this).data('img');
    let price = Number($(this).data('price'));
    
    wishList.addItemToList(name, price, 1, img);
    displayList();
  });
  
  // Clear items
  $('.clear-item').click(function() {
    wishList.clearList();
    displayList();
  });
  
  
  
  function displayList() {
    let cartArray = wishList.listList();
    
    let output = "";
    for(let i in cartArray) {
      output += "<tbody>"
           + '<tr>'
           + '<td width="35%">'
           + '<div class="display-flex align-center">'
           + '<div class="img-product">'
           + '<img class"wish-img" style="height: 120px; width: 120px;" src="'+cartArray[i].img+'">'
           + '</div>'
           + '</td>'
           + '<td width="10%">'
           + '<div class="name-product" style ="font-size: 15px; color: #484848; padding-top: 8px; line-height: 24px;">'+cartArray[i].name+'</div>'
           + '</div>'
           + '</td>'
           + '<td width="15%" class="price" style ="font-weight: 600; padding-top: 16px; line-height: 24px;">$'+cartArray[i].price+'</td>'
           + '<td width="30%"><button class="btn btn-outline-success add-to-cart cartWish" data-name=' + cartArray[i].name + ' data-price=' + cartArray[i].price+ ' data-img=' + cartArray[i].img+ '>Add to Cart</button></td>'
           + '<td width="10%" class="text-center "><a href="#" class="trash-icon"><i style = "padding-top: 6px; line-height: 24px;" class="fa-solid fa-trash fa-xl delete-item" data-name=' + cartArray[i].name + '></i></a></td>'
           + '</tr>'
           
    }
    $('.show-list').html(output);
    $('.total-list').html(wishList.totalList());
    $('.total-countList').html(wishList.totalCountOfList());
  }
  
  // Delete item button
  
  $('.show-list').on("click", ".delete-item", function(event) {
    let name = $(this).data('name')
    wishList.removeItemFromListAll(name);
    displayList();
  })
  $('.show-list').on("click", ".cartWish", function(event) {
    event.preventDefault();
    let name = $(this).data('name');
    let img = $(this).data('img');
    let price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1, img);
    displayCart();
  })
  $('.delete-item').click(function() {
    let name = $(this).data('name')
    wishList.removeItemFromListAll(name);
    wishList.removeItemFromList(name);
    displayList();
  })
  
  // -1
  $('.show-list').on("click", ".minus-item", function(event) {
    let name = $(this).data('name')
    wishList.removeItemFromList(name);
    displayList();
  })
  
  
  // Item count input
  $('.show-list').on("change", ".item-count", function(event) {
     let name = $(this).data('name');
     let count = Number($(this).val());
    wishList.setCountForItemOfList(name, count);
    displayList();
  });
  
  displayList();
  


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
  });
  



