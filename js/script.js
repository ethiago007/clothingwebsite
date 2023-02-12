
    
let navbar = document.querySelector(".navbar");
    let searchBox = document.querySelector(".search-box .bx-search");
    // let searchBoxCancel = document.querySelector(".search-box .bx-x");
    
    searchBox.addEventListener("click", ()=>{
      navbar.classList.toggle("showInput");
      if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("bx-search" ,"bx-x");
      }else {
        searchBox.classList.replace("bx-x" ,"bx-search");
      }
    });
    
    // sidebar open close js code
    let navLinks = document.querySelector(".nav-links");
    let menuOpenBtn = document.querySelector(".navbar .bx-menu");
    let menuCloseBtn = document.querySelector(".nav-links .bx-x");
    menuOpenBtn.onclick = function() {
    navLinks.style.left = "0";
    }
    menuCloseBtn.onclick = function() {
    navLinks.style.left = "-100%";
    }
    
    
    // sidebar submenu open close js code
    let htmlcssArrow = document.querySelector(".htmlcss-arrow");
    htmlcssArrow.onclick = function() {
     navLinks.classList.toggle("show1");
    }
    let accessArrow = document.querySelector(".access-arrow");
    accessArrow.onclick = function() {
     navLinks.classList.toggle("show4");
    }
    let moreArrow = document.querySelector(".more-arrow");
    moreArrow.onclick = function() {
     navLinks.classList.toggle("show2");
    }
    let jsArrow = document.querySelector(".js-arrow");
    jsArrow.onclick = function() {
     navLinks.classList.toggle("show3");
    }

    var x = window.matchMedia("(max-width: 920px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    function myFunction(x) {
      if (x.matches) { // If media query matches
        $(".mob-search").show();
      } else {
        $(".mob-search").hide();
      }
    }   
    var y = window.matchMedia("(max-width: 920px)")
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
    $(".inner2").click(function(){
      $(".inner2").hide();
      $("span.inner3").show();
    });
    $("span.inner3").click(function(){
      $(".inner3").hide();
      $(".inner2").show();
    });
    $("ion-icon.heart1").click(function(){
      $("ion-icon.heart1").toggleClass('active')
      $("ion-icon.heart1").toggleClass('active-not')
    })
    $("ion-icon.heart2").click(function(){
      $("ion-icon.heart2").toggleClass('active')
      $("ion-icon.heart2").toggleClass('active-not')
    })
    $("ion-icon.heart3").click(function(){
      $("ion-icon.heart3").toggleClass('active')
      $("ion-icon.heart3").toggleClass('active-not')
    })
    $("ion-icon.heart4").click(function(){
      $("ion-icon.heart4").toggleClass('active')
      $("ion-icon.heart4").toggleClass('active-not')
    })
    $("ion-icon.heart5").click(function(){
      $("ion-icon.heart5").toggleClass('active')
      $("ion-icon.heart5").toggleClass('active-not')
    })
    $("ion-icon.heart6").click(function(){
      $("ion-icon.heart6").toggleClass('active')
      $("ion-icon.heart6").toggleClass('active-not')
    })
    $("ion-icon.heart7").click(function(){
      $("ion-icon.heart7").toggleClass('active')
      $("ion-icon.heart7").toggleClass('active-not')
    })
    $("ion-icon.heart8").click(function(){
      $("ion-icon.heart8").toggleClass('active')
      $("ion-icon.heart8").toggleClass('active-not')
    })
    $("ion-icon.heart9").click(function(){
      $("ion-icon.heart9").toggleClass('active')
      $("ion-icon.heart9").toggleClass('active-not')
    })
    $("ion-icon.heart10").click(function(){
      $("ion-icon.heart10").toggleClass('active')
      $("ion-icon.heart10").toggleClass('active-not')
    })
    $("ion-icon.heart11").click(function(){
      $("ion-icon.heart11").toggleClass('active')
      $("ion-icon.heart11").toggleClass('active-not')
    })
    $("ion-icon.heart12").click(function(){
      $("ion-icon.heart12").toggleClass('active')
      $("ion-icon.heart12").toggleClass('active-not')
    })
    $("ion-icon.heart13").click(function(){
      $("ion-icon.heart13").toggleClass('active')
      $("ion-icon.heart13").toggleClass('active-not')
    })
    $("ion-icon.heart14").click(function(){
      $("ion-icon.heart14").toggleClass('active')
      $("ion-icon.heart14").toggleClass('active-not')
    })
    $("ion-icon.heart15").click(function(){
      $("ion-icon.heart15").toggleClass('active')
      $("ion-icon.heart15").toggleClass('active-not')
    })
    $("ion-icon.heart16").click(function(){
      $("ion-icon.heart16").toggleClass('active')
      $("ion-icon.heart16").toggleClass('active-not')
    })
    
    $(".inner2").click(function(){
     
        showSuccessAlert();
      
     })
     $(".inner3").click(function(){
      
      showError();
    
   })
    
  });

//   let icon = document.querySelector('ion-icon');
// icon.onclick = function(){
//   icon.classList.toggle('active');
// }