
function validar() {
    let nombre = document.getElementById('nombre').value;
    if (nombre==null || nombre.length==0 ) {
    
    document.getElementById('texto').innerHTML="Ingresar nombre";
    document.getElementById('texto').style.color="red";
    document.getElementById('nombre').focus();
    return false;
    }
    let apellidos = document.getElementById('apellidos').value;
    if (apellidos==null || apellidos.length==0 ) {
    document.getElementById('texto2').innerHTML="Ingresar apellidos";
    document.getElementById('texto2').style.color="red";
    document.getElementById('apellidos').focus();
    return false;
    } 

    let correo = document.getElementById('correo').value;
    if (correo==null || correo.length==0 ) {
    document.getElementById('texto3').innerHTML="Ingresar un correo";
    document.getElementById('texto3').style.color="red";
    document.getElementById('correo').focus();
    return false;
    } 
    let contrasena = document.getElementById('contrasena').value;
    if(contrasena<= 6){
        document.getElementById('texto4').innerHTML="Contraseña no valida";
        document.getElementById('texto4').style.color="red";
        document.getElementById('contrasena').focus();

    }
    
    let genero  = Number(document.getElementById('genero').selectedIndex);
    if (genero==0) {
        alert('Debe seleccionar un sexo');
        return false;
    } 
        
   
        
 

}

