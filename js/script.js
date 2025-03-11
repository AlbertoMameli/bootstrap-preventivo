
//aspettiamo di eseguire il nostro javascript dopo che la pagina sia 
// complettamente caricata 
document.addEventListener("DOMContentLoaded", function(){



//Raccolgo tutti gli elementi del dom

const validationForm = document.getElementById("validation-Form")
const nameInput = document.getElementById("name-Input")
const surnameInput = document.getElementById("surname-Input")
const emailInput = document.getElementById ("email-Input")
const selectWork = document.getElementById ("select-Work")
const textAreaInput = document.getElementById ("texarea-Input")
const couponInput = document.getElementById ("coupon-Input")
const checkPrivacy = document.getElementById ("check-privacy")
const buttonPreventivo = document.getElementById ("button-Preventivo")
const resultPrice = document.getElementById ("result-price")
const campiError = document.getElementById ("campi-Error")
const scontoOttenuto = document.getElementById ("sconto-Ottenuto")


//creo una function non anonima per rendere più pulito il codice 

validationForm.addEventListener("submit", gestisciForm);


function gestisciForm(event) {
    event.preventDefault();
    
    

    //prelevo i value degli input 
    //  aggiungo .trim() per eliminare eventuali spazi vuoti nelle stringhe
     const nome = nameInput.value.trim(); 
     const cognome = surnameInput.value.trim();
     const emailForm = emailInput.value.trim();


    






// creo un oggetto con i prezzi valori dei lavori 
const prezzoLavoro = {
    backendDevelopment: 20.50,
        frontendDevelopment: 15.30,
        projectAnalysis: 33.60
}



//creo una function per calcolare il lavoro da svolgere,
    /*considerando che ogni lavoro viene svolto in 10 ore*/




}


})