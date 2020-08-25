document.addEventListener("DOMContentLoaded", function () {
    
 


    let champSaisie = document.getElementById("input")
    let input = document.createElement('input')
    champSaisie.appendChild(input)
    let select = document.createElement('select')
    champSaisie.appendChild(select)
    let option1 = document.createElement('option')
    champSaisie.appendChild(option1)
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
    
