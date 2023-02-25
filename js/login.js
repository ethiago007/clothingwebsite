function Verification() {
    this.details = {};
    this.currentId = 0;
  }
  
  Verification.prototype.addDetail = function (detail) {
    detail.id = this.assignId();
    this.details[detail.id] = detail;
  };
  
  Verification.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
  };
  
  Verification.prototype.findDetail = function (id) {
    if (this.details[id] != undefined) {
      return this.details[id];
    }
    return false;
  };
  
   function Detail(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  
  Detail.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  




$(document).ready(function () {

    // SIGN IN LOG IN
$("#confirm").submit(function (event) {
    event.preventDefault()
    let inputtedFirstName = $("#floatingFirstName").val();
    let inputtedLastName = $("#floatingSecondName").val();
    let inputtedEmail = $("#floatingInput").val();
    let inputtedPassword;
    let firstPassword = $("#floatingPass").val()
    let secondPassword = $("#floatingConfirmPass").val()
    let verification = new Verification();
    if (firstPassword === secondPassword) {
      inputtedPassword = firstPassword;
      $(".alert").hide();
      window.location.href = "./signIn.html";
    } else {
      $(".alert").show();
    }
    let newDetail = new Detail(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedPassword);
    verification.addDetail(newDetail);
    const myObjectString = JSON.stringify(verification);
    localStorage.setItem('objectVerify', myObjectString);
  });
  $("#confirm2").submit(function (event) {
    event.preventDefault()
    let inputtedEmail2 = $("#floatingInput2").val();
    let inputtedPassword2 = $("#floatingPassword2").val();
    const myObjectString2 = localStorage.getItem('objectVerify');
    const myObject2 = JSON.parse(myObjectString2);
    console.log(myObject2)
    Object.keys(myObject2.details).forEach(function (key) {
      let detail3 = myObject2.details[key];
      if (detail3.email === inputtedEmail2 && detail3.password === inputtedPassword2) {
      
        window.location.href = "./realWeb.html";
       
      } else {
        $(".alert2").show();
       
      }
    });
  });
});