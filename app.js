// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    verificado = verificarCaja();
    if(verificado == true){

    }else{
        let amigo = document.getElementById('amigo').value;
    amigos.push(amigo);
    actualizarListaAmigos();
    limpiarCaja();
    console.log(amigos);
   
    }
}

function sortearAmigo(){
    if(amigo != ""){
        let numeroAleatorio = Math.floor(Math.random()*amigos.length);
        let elementoHtml = document.getElementById('resultado');
        elementoHtml.innerHTML = 'Tu amigo secreto es ' + amigos[numeroAleatorio];
        limpiarLista();
    }else{

    }
}

function limpiarCaja(){
let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}

function verificarCaja(){
    let valorCaja = document.getElementById('amigo').value;
    let estaVacio;
    if(valorCaja == ''){
        alert("Por favor, ingrese un nombre")
        estaVacio = true;
    }else{
        estaVacio = false;
    };
    return estaVacio;
}

function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    for(let i=0; i<amigos.length; i++){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento)
        
    }
    };

function limpiarLista(){
    amigos = [];
    actualizarListaAmigos();
  }