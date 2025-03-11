
//aspettiamo di eseguire il nostro javascript dopo che la pagina sia 
// complettamente caricata 
document.addEventListener("DOMContentLoaded", function () {



    //Raccolgo tutti gli elementi del dom

    const validationForm = document.getElementById("validation-Form");
    const nameInput = document.getElementById("name-Input");
    const surnameInput = document.getElementById("surname-Input");
    const emailInput = document.getElementById("email-Input");
    const selectWork = document.getElementById("select-Work");
    const couponInput = document.getElementById("coupon-Input");
    const checkPrivacy = document.getElementById("check-privacy");
    const resultPrice = document.getElementById("result-price");
    const campiError = document.getElementById("campi-Error");
    const scontoOttenuto = document.getElementById("sconto-Ottenuto");




    // creo un oggetto con i prezzi valori dei lavori 
    const prezzoLavoro = {
        backendDevelopment: 20.50,
        frontendDevelopment: 15.30,
        projectAnalysis: 33.60
    }



    //creo un array con i codici sconto
    const codiciPromo = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



    //creo una function non anonima per rendere più pulito il codice 

    validationForm.addEventListener("submit", gestisciForm);


    function gestisciForm(event) {
        event.preventDefault();


        // Prelevo i valori dagli input
        const nome = nameInput.value.trim();
        const cognome = surnameInput.value.trim();
        const emailForm = emailInput.value.trim();
        const lavoro = selectWork.value;
        const codicePromo = couponInput.value.trim();
        const accettatoPrivacy = checkPrivacy.checked; //se selezionato mi da true
        console.log(accettatoPrivacy);
        










    }


})