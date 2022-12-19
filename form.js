var usernameInput = document.getElementById("usernameInput");
var userEmailInput = document.getElementById("userEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");
var userInfo;
if (localStorage.getItem("users") == null) {
  userInfo = [];
} else {
  userInfo = JSON.parse(localStorage.getItem("users"));
}
function signUp() {
  isExist();

  if (isExist() == false) {
    var user = {
      name: usernameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    if (userEmailInput.value == "" || userPasswordInput.value == "") {
      var fillMsg = document.getElementById("fillMsg");
      fillMsg.classList.replace("d-none", "d-block");

      return false;
    }
    userInfo.push(user);
    console.log(userInfo);
    localStorage.setItem("users", JSON.stringify(userInfo));
    var confirmMsg = document.getElementById("confirmMsg");
    confirmMsg.classList.replace("d-none", "d-block");
    var signin = document.getElementById("signin");
    signin.classList.replace("d-none", "d-block");
  } else {
    if (userEmailInput.value == "" || userPasswordInput.value == "") {
      var fillMsg = document.getElementById("fillMsg");
      fillMsg.classList.replace("d-none", "d-block");

      return false;
    }
    var tryAgainMsg = document.getElementById("accountExistMsg");
    tryAgainMsg.classList.replace("d-none", "d-block");
  }
}

function isExist() {
  var accountExistMsg = document.getElementById("accountExistMsg");
  for (var i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].name.toLowerCase() == usernameInput.value.toLowerCase() ||
      userInfo[i].email.toLowerCase() == userEmailInput.value.toLowerCase()
    ) {
      usernameInput.classList.remove("is-valid");
      userEmailInput.classList.remove("is-valid");
      return true;
    }
  }

  return false;
}

function login() {
  var loginEmail = document.getElementById("loginEmail");
  var loginPassword = document.getElementById("loginPassword");
  var loginBtn = document.getElementById("loginBtn");

  if (loginEmail.value == "" || loginPassword.value == "") {
    var fillMsg = document.getElementById("fillMsg");
    fillMsg.classList.replace("d-none", "d-block");

    return false;
  }
  for (var i = 0; i < userInfo.length; i++) {
    if (
      userInfo[i].email.toLowerCase() == loginEmail.value.toLowerCase() &&
      userInfo[i].password.toLowerCase() == loginPassword.value.toLowerCase()
    ) {
      loginBtn.setAttribute("href", "welcome.html");
    } else {
      var wrongMsg = document.getElementById("wrongMsg");
      wrongMsg.classList.replace("d-none", "d-block");
    }
  }
}
