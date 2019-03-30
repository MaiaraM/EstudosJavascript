var frase = document.getElementById("frase");
var contadorPalavras = document.getElementById("palavras");
var areaDigitacao = document.querySelector("#areaDigitacao");
var contadortempo = document.getElementById("contadorTempo");
var resultadoPalavras = document.getElementById("resultadoPalavras");
var resultadoCaracteres = document.getElementById("resultadoCaracteres");
var tempo = 20;
var listaPalavras = frase.textContent.split(" ");
contadorPalavras.textContent = listaPalavras.length;

reset();

areaDigitacao.addEventListener("focus", function () {
    reset();
    this.addEventListener("input", function () {
        let caracteresDigitados = this.value.split("");
        resultadoCaracteres.textContent = caracteresDigitados.length / tempo;
    });

    // this.addEventListener("keypress", function(event){
    //   if(event.code == 'Space'){
    //     let palavrasDigitadas = this.value.split(" ");
    //     verificarPalavras(palavrasDigitadas);
    //   }
    // })
    cronometro(true);
});

areaDigitacao.addEventListener("focusout", function () {
    areaDigitacao.disabled = true;
    cronometro(false);
    contadortempo.textContent = 1;
})

function cronometro(status) {
    var cronometroID;
    if (status) {
        cronometroID = setInterval(function () {
            contadortempo.textContent--;
            if (contadortempo.textContent < 1) {
                areaDigitacao.disabled = true;
                resultado();
                areaDigitacao.classList.remove("bordaVermelha", "bordaVerde");
                clearInterval(cronometroID);
            }
        }, 1000);
    } else {
        cronometroID = clearInterval(cronometroID);
    }
}

function reset() {
    areaDigitacao.value = "";
    contadortempo.textContent = tempo;
    resultadoPalavras.textContent = 0;
    resultadoCaracteres.textContent = 0;
}
var aux = 0;

function verificarPalavras(palavra) {
    for (var a = 0; a <= aux; a++) {
        if (palavra[a].toLowerCase() == listaPalavras[a].toLowerCase()) {
            if (areaDigitacao.classList.contains("bordaVermelha")) {
                areaDigitacao.classList.replace("bordaVermelha", "bordaVerde");
            } else {
                areaDigitacao.classList.add("bordaVerde");
            }
        } else {
            if (areaDigitacao.classList.contains("bordaVerde")) {
                areaDigitacao.classList.replace("bordaVerde", "bordaVermelha");
            } else {
                areaDigitacao.classList.add("bordaVermelha");
            }
        }
    }
    aux++;
}

function resultado() {
    var i =0  ;
    let valores = areaDigitacao.value.split(" ");
    for (let b = 0; b < valores.length; b++) {
       if(valores[b] == listaPalavras[b]){
           i++;
       } 
    }
    console.log(i);
    resultadoPalavras.textContent = i;
}

