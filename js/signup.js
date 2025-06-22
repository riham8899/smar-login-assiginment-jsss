var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
// var SignInEmail1 = document.getElementById("SignInEmail1");
// var SignInPassword = document.getElementById("SignInPassword");
// var username = document.getElementById("username")
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



// var username = localStorage.getItem("sessionUsername");
// if (username) {
//     document.getElementById("username").innerHTML = "welcom" + username;
//     console.log(username)
// }


// clicked sign up 
var signUpClick = document.getElementById("signUpClick");

var signUp;
var signUpArray = []

if (localStorage.getItem("input") == null) {

    var signUpArray = []

} else {


    signUpArray = JSON.parse(localStorage.getItem("input"))

}




signUpClick.addEventListener("click", function () {

    signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    // console.log(signUp)

    // signUpArray.push(signUp)
    // console.log(signUpArray);
    // localStorage.setItem("input", JSON.stringify(signUpArray));

    emailExist()


    if (!signUp.name || !signUp.email || !signUp.password) {
        document.getElementById("exist").innerHTML =
            `<span class="text-danger m-3">Please fill all fields</span>`;
        return;
    }





    signUp = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
}

if (signUpArray.length == 0) {
    signUpArray.push(signUp)
    console.log(signUpArray);

    localStorage.setItem("input", JSON.stringify(signUpArray));
    document.getElementById("exist").innerHTML = `<span class="text-success m-3">Success</span>`
    return true
} if (emailExist((signUp.email))) {
    
    document.getElementById("exist").innerHTML = `<span class="text-danger m-3">email already exists<span>`




} else {
    signUpArray.push(signUp)

    localStorage.setItem("input", JSON.stringify(signUpArray));
    document.getElementById("exist").innerHTML = `<span class="text-success m-3">Success</span>`

    signupName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";



}




})

// email exsit
// signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()




function emailExist() {

    for (var i = 0; i < signUpArray.length; i++) {


        if (signUpArray[i] &&
            signUpArray[i].email &&
            signUpArray[i].email.toLowerCase() === signupEmail.value.toLowerCase()) {
            console.log(signUpArray[i].email)

            console.log("Email exists:", signUpArray[i].email);
            console.log("hii")
            return true;




        }


    }
    return false;
}










// console.log(signUpArray);
// to save to local

// signUp = {
//     name: signupName.value,
//     email: signupEmail.value,
//     password: signupPassword.value,
// }

// if (signUpArray.length == 0) {
//     signUpArray.push(signUp)
//     console.log(signUpArray);

//     localStorage.setItem("input", JSON.stringify(signUpArray));
//     document.getElementById("exist").innerHTML = `<span class="text-success m-3">Success</span>`
//     // return true
// } if (emailExist((signUp.email))) {
//     var isExist = signUpArray.some(function (item) {
//         return item && item.email === signUp.email;
//     });

//     document.getElementById("exist").innerHTML = `<span class="text-danger m-3">email already exists<span>`




// } else {
//     signUpArray.push(signUp)

//     localStorage.setItem("input", JSON.stringify(signUpArray));
//     document.getElementById("exist").innerHTML = `<span class="text-success m-3">Success</span>`

//     signupName.value = "";
//     signupEmail.value = "";
//     signupPassword.value = "";



// }




