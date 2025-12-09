const bonnesReponses = {
    reponse2Q1: true,  
    reponse3Q2: true,  
    reponse3Q3: true,
    reponseB1: true   
};


const boutons = document.querySelectorAll("button");

boutons.forEach(bouton => {
    bouton.addEventListener("click", () => {

       
        const id = bouton.id;
        const question = id.slice(-2);
        boutons.forEach(b => {
            if (b.id.endsWith(question)) {
                b.classList.remove("vrai", "faux");
            }
        });

        
        if (bonnesReponses[bouton.id]) {
            bouton.classList.add("vrai");
        } else {
            bouton.classList.add("faux");
        }
    });
});
