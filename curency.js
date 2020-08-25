
document.addEventListener("DOMContentLoaded", function () {
    
 


    let root = document.getElementById("root")
    let input = document.createElement('input')
    input.id="imput_origin"
    input.appendChild(root)
    let origin = document.createElement('select')
    origin.id="origin"
    origin.value="select"
    origin.appendChild(input)
    let option1 = document.createElement('option')
    option1.id="euro"
    option1.value ="euro"
    option1.innerText = "euro €"
    input.appendChild(option1)
    let option2 = document.createElement('option')
    option2.id="dolar"
    option2.value ="dolar"
    option2.innerText= "dolar $"
    input.appendChild(option2)
    let option3 = document.createElement('option')
    option3.id="yen"
    option3.value ="yen"
    option3.innerText= "yen"
    input.appendChild(option3)
    root.appendChild(input)
    input.placeholder = "Saisir valeur a convertir"
    let resultat= document.getElementById('resultat')
    resultat.id = "resultat"
    let input2 = document.createElement('deviseResultat')
    input2.id="imputCible"
    let cible = document.createElement('select')
    cible.id="select1"
    cible.value="select"
    cible.innerHTML="choisir sa monnaie"
    input2.appendChild(cible)
    let option4 = document.createElement('option')
    option4.id="euro"
    option4.value ="euro"
    option4.innerText = "euro €"
    input2.appendChild(option4)
    let option5 = document.createElement('option')
    option5.id="dolar"
    option5.value ="dolar"
    option5.innerText= "dolar $"
    input2.appendChild(option5)
    let option6 = document.createElement('option')
    option6.id="yen"
    option6.value ="yen"
    option6.innerText= "yen"
    input2.appendChild(option6)
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


