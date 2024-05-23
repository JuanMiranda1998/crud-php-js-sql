leer();
document.querySelector(".comprar").addEventListener("click", guardar);
document.querySelector(".vaciar").addEventListener("click", limpiar);
document.querySelector("#producto").addEventListener("keydown", teclado);

function teclado(e){
    e.key==="Enter" && guardar();
}

function vaciar(){
    document.querySelector("#producto").value='';
    document.querySelector("#producto").focus();
}

function limpiar(){
    fetch('php/vaciar.php')
    .then(respuesta=> respuesta.text())
    .then(mostrar)
}

function guardar(){
    const escrito = document.querySelector("#producto").value.trim();
    if (escrito) {
        const dato = {
            aGuardar:escrito,
        }
        fetch("php/insertar.php", {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dato)
        })
        .then(u => u.text())
        .then(o => leer())
    }
}

function leer(){
    fetch("php/leer.php")
    .then(datos => datos.json())
    .then(resultado => {
        mostrar(resultado)
    });
}

function mostrar(info){
    document.querySelector(".caja").innerHTML = '';
    info.map(valor=>
        document.querySelector(".caja").insertAdjacentHTML('beforeend', 
        `
        <div>${JSON.parse(valor.productos)}</div>
        `)
    )
    vaciar()
}