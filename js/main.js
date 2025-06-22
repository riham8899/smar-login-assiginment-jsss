var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var SignInEmail1 = document.getElementById("SignInEmail1");
var SignInPassword = document.getElementById("SignInPassword");
var signinClick = document.getElementById("signinClick")

var username = document.getElementById("username")


var baseUrl = window.location.pathname;
console.log(baseUrl);
var messageBox = document.getElementById("exist");

var pathparts = location.pathname.split('/');
var baseURL = ''
for (var i = 0; i < pathparts.length - 1; i++) {
    baseURL += '/' + pathparts[i]
}
console.log(baseURL);
// console.log(pathparts);



var username = localStorage.getItem("username");
if (username) {
    document.getElementById("username").innerHTML = "welcom " + username;
    console.log(username)
}


// clicked sign up 
var signUpClick = document.getElementById("signUpClick");

var signUp;
var signUpArray = []

if (localStorage.getItem("input") == null) {

    var signUpArray = []

} else {


    signUpArray = JSON.parse(localStorage.getItem("input"))

}







// signUpClick.addEventListener("click", function () {

//     signUp = {
//         name: signupName.value,
//         email: signupEmail.value,
//         password: signupPassword.value,
//     }
//     // console.log(signUp)

//     signUpArray.push(signUp)
//     // console.log(signUpArray);

// })

function loginIsEmpty() {
    if (SignInPassword.value == "" || SignInEmail1.value == "") {

        return false;

    } else {
        return true;
    }

}



signinClick.addEventListener("click", function () {
    if (loginIsEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = SignInPassword.value;
    var email = SignInEmail1.value;

    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem("username", signUpArray[i].name)
            if (baseURL == "/") {
                location.replace('https://' + location.hostname + '/home.html')

            } else {
                location.replace(baseURL + '/home.html')
            }


        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }

    }



})


 function logout(){
    localStorage.removeItem('username')
 }


















