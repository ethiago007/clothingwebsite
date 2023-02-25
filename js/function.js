//--------------------- NAVBAR CODE --------------------

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
let moreArrow2 = document.querySelector(".more-arrow2");
moreArrow2.onclick = function () {
    navLinks.classList.toggle("show5");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
    navLinks.classList.toggle("show3");
}

// CODE FOR SHOWING SEARCH BOX IN NAVBAR MOBILE FORM
let x = window.matchMedia("(max-width: 920px)")
myFunction(x)
x.addListener(myFunction)
function myFunction(x) {
    if (x.matches) {
        $(".mob-search").show();
    } else {
        $(".mob-search").hide();
    }
}

// CODE FOR SHOWING WISHLIST IN NAVBAR MOBILE FORM
let y = window.matchMedia("(max-width: 920px)")
myFunction(y)
y.addListener(myFunction)
function myFunction(y) {
    if (y.matches) {
        $(".wish-mob").show();
    } else {
        $(".wish-mob").hide();
    }
}
// let z = window.matchMedia("(max-width: 700px)")
// myFunction(z) 
// z.addListener(myFunction) 
// function myFunction(z) {
//     if (z.matches) { 
//         $("#carouselExampleCaptions").show();
//         $(".welcomeimg").hide();
//     } else {
//         $("#carouselExampleCaptions").hide();
//         $(".welcomeimg").show();
//     }
// }

// CODE FOR GIVINIG SPACE 
function myFunction2(k) {
    if (k.matches) {
        $(".space").html("<br><br>");
    }
}
let k = window.matchMedia("(max-width: 720px)")
myFunction2(k)
k.addListener(myFunction2)

//  CODE FOR SHOWING CAROUSEL IN MOBILE
let a = window.matchMedia("(min-width: 720px)")
myFunction(a)
a.addListener(myFunction)
function myFunction(a) {
    if (a.matches) {
        $("#carouselExampleCaptions").hide();
    } else {
        $("#carouselExampleCaptions").show();
    }
}

// CODE FOR TEXT ANIMATIONS
let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12 .letter',
        opacity: [1],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    });
let textWrapper2 = document.querySelector('.ml10 .letters');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 85 * i
    }).add({
        targets: '.ml10',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

//--------------------- CART ADDITION NOTIFICATION CODE --------------------

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
function showInfoAlert() {
    Swal.fire({
        icon: 'info',
        title: '',
        text: 'These are the only Available goods for now. You will be notified when there are new arrivals'
    })
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//--------------------- CART AND WISH LIST STORAGE CODE --------------------  


let shoppingCart = (function () {
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
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(localStorage.getItem('shoppingCart'));
    }
    if (localStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    let obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count, img) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        let item = new Item(name, price, count, img);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (let i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (let item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        let totalCount = 0;
        for (let item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        let totalCart = 0;
        for (let item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        let cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
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


let wishList = (function () {
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
        localStorage.setItem('wishList', JSON.stringify(list));
    }

    // Load cart
    function loadList() {
        list = JSON.parse(localStorage.getItem('wishList'));
    }
    if (localStorage.getItem("wishList") != null) {
        loadList();
    }


    // =============================
    // Public methods and propeties
    // =============================
    let listsInWish = {};

    // Add to cart
    listsInWish.addItemToList = function (name, price, count, img) {
        for (let item in list) {
            if (list[item].name === name) {
                list[item].count++;
                saveList();
                return;
            }
        }
        let item = new Item(name, price, count, img);
        list.push(item);
        saveList();
    }
    // Set count from item
    listsInWish.setCountForItemOfList = function (name, count) {
        for (let i in list) {
            if (list[i].name === name) {
                list[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    listsInWish.removeItemFromList = function (name) {
        for (let item in list) {
            if (list[item].name === name) {
                list[item].count--;
                if (list[item].count === 0) {
                    list.splice(item, 1);
                }
                break;
            }
        }
        saveList();
    }

    // Remove all items from cart
    listsInWish.removeItemFromListAll = function (name) {
        for (let item in list) {
            if (list[item].name === name) {
                list.splice(item, 1);
                break;
            }
        }
        saveList();
    }

    // Clear cart
    listsInWish.clearList = function () {
        list = [];
        saveList();
    }

    // Count cart 
    listsInWish.totalCountOfList = function () {
        let totalOfList = 0;
        for (let item in list) {
            totalOfList += list[item].count;
        }
        return totalOfList;
    }

    // Total cart
    listsInWish.totalList = function () {
        let totalList = 0;
        for (let item in list) {
            totalList += list[item].price * list[item].count;
        }
        return Number(totalList.toFixed(2));
    }

    // List cart
    listsInWish.listList = function () {
        let listCopy = [];
        for (i in list) {
            item = list[i];
            itemCopy = {};
            for (p in item) {
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

let prodPreview = (function () {

    prev = [];


    function Item(name, price, count, img, description, code) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
        this.description = description;
        this.code = code
    }


    function savePrev() {
        sessionStorage.setItem('prodPreview', JSON.stringify(prev));
    }


    function loadPrev() {
        prev = JSON.parse(sessionStorage.getItem('prodPreview'));
    }
    if (sessionStorage.getItem("prodPreview") != null) {
        loadPrev();
    }



    let preview = {};


    preview.addItemToPrev = function (name, price, count, img, description, code) {
        for (let item in prev) {
            if (prev[item].name === name) {
                prev[item].count++;

                return;
            }
        }
        let item = new Item(name, price, count, img, description, code);
        prev.push(item);
        savePrev();
    }
    preview.clearList = function () {
        prev = [];
        savePrev();
    }



    preview.listPrev = function () {
        let prevCopy = [];
        for (i in prev) {
            item = prev[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            prevCopy.push(itemCopy)
        }
        return prevCopy;
    }



    return preview;
})();



// PRELOADER CODE 
function fadeout(){
    const preloader = document.querySelector('#app-preloader')
  preloader.style.opacity = '0'
  preloader.style.visibility = 'hidden'
  $(".wholebody").show();
  let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12 .letter',
        opacity: [1],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    });
let textWrapper2 = document.querySelector('.ml10 .letters');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml10 .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 85 * i
    }).add({
        targets: '.ml10',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}