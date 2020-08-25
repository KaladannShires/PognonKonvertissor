"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var champSaisie = document.getElementById("input");
  var input = document.createElement('input');
  champSaisie.appendChild(input);
  input.id = "champSaisie";
  input.placeholder = "Saisir valeur a convertir";
});