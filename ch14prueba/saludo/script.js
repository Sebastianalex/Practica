console.log("se nota que todavía me extrañan");


setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  let frase = document.getElementsByTagName("h3")[0];

  if (frase.innerText == "Ganando como siempre") {
    //frase = "Impongo moda para las niñas!";
    frase.innerText= "Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
    frase.innerText = "Ganando como siempre";
  }
  console.log("frase :" + frase);
}