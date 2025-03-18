let listaDeContactos = [];
let indiceAleatorio;

function agregarContacto(){
    let nombreContacto = document.getElementById("amigo").value;

    if (nombreContacto.length <= 1){
        alert("Ingresa un nombre de contacto válido!");
    }else{
        listaDeContactos.push(nombreContacto);
        actualizarListaContactos();
        console.log("Nombre agregado a la lista.");
    }
    
    document.getElementById("amigo").value = '';

    console.log(nombreContacto);
    console.log(listaDeContactos);

    return;
}

function actualizarListaContactos(){
    let listaContactosHtml = document.getElementById("listaAmigos");
    listaContactosHtml.innerHTML = "";
    for (let i = 0; i < listaDeContactos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaDeContactos[i];
        listaContactosHtml.appendChild(li);
    }
    return;
}

function sortearContacto(){
    if (listaDeContactos.length >= 2){
        indiceAleatorio = Math.floor(Math.random() * listaDeContactos.length);
        console.log(indiceAleatorio);
        let contactoSecreto = listaDeContactos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = contactoSecreto;
    }else{
        alert("Por favor, primero ingrese al menos 2 personas a la lista.");
    }

    return;
}
