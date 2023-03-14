function formularioDatos(){

    let nombre = document.getElementById('nombre').value;
    if (nombre==null || nombre.length==0 ) {
         alert('Faltan Ingresar tus  datos');
    document.getElementById('nombre').style.borderColor="red";
    return false;
}

let apellido = document.getElementById('apellido').value;
    if (apellido==null || apellido.length==0 ) {
        alert('Faltan ingresar tus datos');
    document.getElementById('apellido').style.borderColor="red";
    return false;

}

let numtelef = document.getElementById('num').value;
    if (numtelef==null || numtelef.length==0 ) {
        alert('Faltan ingresar tus  datos');
    document.getElementById('num').style.borderColor="red";
    return false;

}

}