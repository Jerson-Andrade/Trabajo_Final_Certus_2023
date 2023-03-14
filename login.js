

function iniciar(){

    let username= document.getElementById("usuario").value;
    let contrasena= document.getElementById("contrasena").value;
  
        if(username=="admin" && contrasena =="admin"){
    
        window.location="index2.html";
        }
        else{

            alert("Usuario o Contraseña incorecta ")
        }
           console.log(data);
        
    
}