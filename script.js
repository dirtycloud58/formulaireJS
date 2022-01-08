const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
let identifiant, email, password, passwordConfirm;
const form = document.querySelector("form");

inputs.forEach((input) => {

    input.addEventListener("input", (e) => {
    switch(e.target.id){

        case "identifiant":
            identifiantChecker(e.target.value);
            break;
        case "email":
            emailChecker(e.target.value);
            break;
        case "password":
            passwordChecker(e.target.value);
            break;
        case "passwordConfirm":
            passwordConfirmChecker(e.target.value);
            break;
        default:
            null;

    }
});
});

                                            //function errorDisplay

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector('.' + tag + '-container');
    const span = document.querySelector('.' + tag + '-container > span');

if(!valid){
    container.classList.add('error');
    span.textContent = message;
} else {
    container.classList.remove('error');
    span.textContent = "";
}

};
                                            // identifiant
const identifiantChecker = (value) => {

    if(value.length && (value.length < 3 || value.length > 20)){
        errorDisplay("identifiant", "votre identifiant doit contenir entre 3 et 20 caracteres");
        identifiant = null;
    }else if(!value.match(/^[a-zA-Z0-9_.-]*$/)){
        errorDisplay("identifiant", "votre identifiant ne doit pas contenir de caractere speciaux");
        identifiant = null;
    }else {
        errorDisplay("identifiant", "", true);
        identifiant = value;     
    }
};
                                            //email
const emailChecker = (value) => {
    if(!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errorDisplay("email", "votre adresse email n'est pas valide");
        email = null;
    }else {
        errorDisplay("email", "", true);
        email = value;
    }
};
                                            //password
const passwordChecker = (value) => {
    if(value.length < 8 ){
        errorDisplay("password", "votre mot de passe doit contenir minimum 8 caracteres");
        password = null;
    }else if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)){
        errorDisplay("password", "votre mot de passe doit contenir 1 majuscule, 1 chiffre et un caractere speciaux");
        password = null;
    }else {
        errorDisplay("password", "", true);
        password = value;
    }
    if(passwordConfirm) passwordConfirmChecker(passwordConfirm);
};

                                            //confirmation password
const passwordConfirmChecker = (value) => {

    if(value !== password){
        errorDisplay("passwordConfirm", "votre mot de passe ne correspond pas");
        passwordConfirm = false;
    }else {
        errorDisplay("passwordConfirm", "", true);
        passwordConfirm = value;
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(identifiant && email && password && passwordConfirm){
        const data = {
            identifiant,
            email,
            password,
            passwordConfirm,
        };

        inputs.forEach((input) => (input.value = ""));
            identifiant = null;
            email = null;
            password = null;
            passwordConfirm = null;
        console.log(data);
        alert('inscription validée');
    }else {
        alert("vous n'enregistrez pas les bonnes informations");
    }
    
});

