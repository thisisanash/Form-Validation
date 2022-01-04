// Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.style.display = "none";
})


// menu

let menu = document.querySelector(".menu")
let menuBtn = document.querySelector("header .menu-bar");
let closeBtn = document.querySelector(".menu .close-btn");

let toggleMenu = () => {
    menu.classList.toggle("show");
}

menuBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);











//

let form = document.querySelector("form");

let username = form.querySelector(".username");
let email = form.querySelector(".email");
let password = form.querySelector(".password");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    usernameValidation();
    emailValidation();
    passwordValidation();
}
);

let usernameValidation = () =>{
    let usernameInput = username.querySelector("input");
    if(isEmpty(username)){
        return ;
    }
    else if(usernameInput.value.length < 7){
        showWarning("must have be 8 charactor log", username);
    }
    else{
        usernameInput.style.borderColor = "#01a1a1";
        removeWarning(username);
    }
}

let emailValidation = () => {
    let emailInput = email.querySelector("input");
    if(isEmpty(email)){
        return ;
    }
    else if(!emailInput.value.includes("@")){
        showWarning("haven't contain @ ", email);
    }
    else{
        emailInput.style.borderColor = "#01a1a1";
        removeWarning(email);
    }
}

let passwordValidation = () => {
    let passwordInput = password.querySelector("input");
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(isEmpty(password)){
        return ;
    }
    else if(passwordInput.value.length <= 6){
        showWarning("must be atleast 6 charactor long", password);
    }
    else if(passwordInput.value.length >= 16){
        showWarning("can't be longer that 16 charactor", password);
    }
    else if(!passwordInput.value.match(regularExpression)){
        showWarning("must include 1 special charator and 1 numeric number", password)
    }
    else{
        passwordInput.style.borderColor = "#01a1a1";
        removeWarning(password);
    }
}

let isEmpty = (element) =>{
    let elementInput = element.querySelector("input");
    elementInput.value = elementInput.value.trim();
    if (!elementInput.value == "") {
        return false;
    }
    else {
        showWarning("can't be empty", element);
        return true;
    }
} 

let showWarning = (message, warElement) =>{
    let elementWar = warElement.querySelector(".warning");

    elementWar.innerHTML = `${warElement.getAttribute("class")} ${message}`;

    elementWar.classList.add("show");
}

let removeWarning = (element) =>{
    let elementWar = element.querySelector(".warning");

    elementWar.innerHTML = `${element.getAttribute("class")} good to go`;

    console.log("good" + element)
    elementWar.classList.remove("show");

}