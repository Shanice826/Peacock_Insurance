document.getElementById('form').addEventListener('submit', function(event) {event.preventDefault()});


document.getElementById('form').addEventListener('submit', function(e){
    if (!email.value.includes("@") ||
    username.value.trim() === "" ||
    password.value.length < 6){
        alert('Please fill out the form.');
    }else{
        alert('Form submitted successfully!');
    }
})




let email = document.getElementById('email');
let username = document.getElementById('username');
let password = document.getElementById('password');


email.addEventListener('input', () =>{
    if(email.value.includes("@") && email.value.includes(".")){
        email.style.borderColor = "green";
    }else{
        email.style.borderColor = "red";
    }
});

username.addEventListener('input', () =>{
    if(username.value.trim() !== ""){
        username.style.borderColor = "green";
    }else{
        username.style.borderColor = "red";
    }
});

password.addEventListener ('input', () =>{
    if(password.value.length >=6 ){
        password.style.borderColor = "green";
    }else{
        password.style.borderColor = "red";
    }
});
