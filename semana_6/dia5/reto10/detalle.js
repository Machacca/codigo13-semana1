// JSON.parse convierte un string a un JSON (objeto)
const objetoCharacter = JSON.parse(localStorage.getItem("character"));

const imgDetail = document.querySelector("#img-detail");
const statusCharacter = document.querySelector("#status");
const nameCharacter = document.querySelector("#name");

const LocationCharacter = document.querySelector("#Location");
const Origin = document.querySelector("#Origin");
const Episodes = document.querySelector("Eepisodes");
const Species = document.querySelector("#Species");

statusCharacter.innerHTML = objetoCharacter.status;
nameCharacter.innerHTML = objetoCharacter.name;
imgDetail.src = objetoCharacter.image;

LocationCharacter = objetoCharacter.objetoCharacter.Location.status;
Origin.innerHTML = objetoCharacter.name;
Episodes.innerHTML = objetoCharacter.Episodes.length;
Species.innerHTML = objetoCharacter.Species;
