
document.addEventListener("DOMContentLoaded", function () {
    
 


let champSaisie = document.getElementById("input")
let input = document.createElement('input')
champSaisie.appendChild(input)
input.id = "champSaisie"
input.placeholder = "Saisir valeur a convertir"

<<<<<<< HEAD




let resultat = document.getElementById("resultat")
resultat.innerHTML = "Votre reultat est de " 



})
=======
})

//  Tableau des données de devises
let dataCurency = [];
//  fonctin qui va chercher les données de l'API : Appeler "chargeDataFetch()" pour récupérer les données.
function chargeDataFetch() {
    fetch(www.floatrates.com/daily/eur.json).then(function(data) {
        // return data.json();
    }).then(function (data) {
        console.log(data);
        dataCurency = data;
    })
}


>>>>>>> 10bca5881538e3126e29e12a52b5372e793a91ce
