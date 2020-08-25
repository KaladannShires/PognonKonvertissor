
document.addEventListener("DOMContentLoaded", function () {
    
 


    let champSaisie = document.getElementById("root")
    let input = document.createElement('root')
    champSaisie.appendChild(root)
    let select = document.createElement('select')
    champSaisie.appendChild(select)
    let option1 = document.createElement('option')
    option1.innerText = "euro €"
    champSaisie.appendChild(option1)
    let option2 = document.createElement('option')
    option2.innerText= "dolar $"
    champSaisie.appendChild(option2)
    let option3 = document.createElement('option')
    option3.innerText= "yen"
    input.id = "champSaisie"
    input.placeholder = "Saisir valeur a convertir"

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


