
let champSaisie = document.getElementById("input")
let input = document.createElement('input')
champSaisie.appendChild(input)
input.id = "champSaisie"
input.placeholder = "Saisir valeur a convertir"

let resultat = document.getElementById("resultat")
resultat.innerHTML = "Votre reultat est de " 



//  Tableau des données de devises
let dataCurency = {};
//  fonctin qui va chercher les données de l'API : Appeler "chargeDataFetch()" pour récupérer les données.
function chargeDataFetch(apiUrl, callback) {
    fetch(apiUrl).then(function(data) {
        return data.json();
    }).then(function (data) {
        console.log(data);
        callback(data);
    })
}

function saveData(data) {
    dataCurency = data;
    console.log('+++++++++++++++');
    console.log('dataAPI OK');
    console.log('+++++++++++++++');
}

chargeDataFetch("http://www.floatrates.com/daily/eur.json",function(data){
    saveData(data);
})


//  Konverstion
function konvert(dataCurency, deviseOrigin, deviseCible) {



} //return result;



//  Affichage résultats
function showResult() {
    const champResult = document.querySelector("#inputCible")
    champResultat = document.createElement("p");
    champResultat.innerText = `Résultat de la conversion : ${valeurCible}`;
    champResult.appendChild(champResultat);
}


