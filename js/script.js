
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
    const scontoOttenuto = document.getElementById("sconto-Ottenuto");




    // creo un oggetto con i prezzi valori dei lavori 
    const prezzoLavoro = {
        backendDevelopment: 20.50,
        frontendDevelopment: 15.30,
        projectAnalysis: 33.60
    }



    //creo un array con i codici sconto e creo una costante con le ore di lavoro da svolgere 
    const codiciSconto = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    const oraLavoro = 10;



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


        //dopo che ho recuperato i valori cosa posso fare?
        //prima posso calcolarmi il prezzo base

        const prezzoBase = prezzoLavoro[lavoro] * oraLavoro;

        //ora posso aggiungere la condizione se l'utente inserisce il codice sconto etc
        //aggiungo il metodo includes per poter verificare se questo codice è inserito nell'array (true o false)
        // se non viene inserito o non viene inserito correttamente allora
        // il prezzofinale sara uguale al prezzo base

        let sconto = 0;

        scontoOttenuto.classList.remove("text-success", "text-danger", "fw-bold"); //inserisco remove per rimuovere lo stile aggiunto in precendenza


        if (codicePromo && codiciSconto.includes(codicePromo)) { //includes sta a if (codicePromo ==="codicesconto")
            sconto = prezzoBase * 0.25;
            //stampiamo un messaggio che dice 
            scontoOttenuto.innerText = `Codice sconto valido`;
            scontoOttenuto.classList.add('text-success', 'fw-bold');


        } else if (codicePromo) {
            //stampiamo il messaggio che il codice non è valido
            scontoOttenuto.innerText = `Codice sconto non valido`;
            scontoOttenuto.classList.add('text-danger', 'fw-bold');

        }
        else {
            scontoOttenuto.innerText = "";

        }


        // ora dopo aver calcolato lo sconto calcoliamo il prezzo finale con:
        let prezzoFinale = prezzoBase - sconto;
        resultPrice.innerText = `${prezzoFinale.toFixed(2)}€`;





    }


})