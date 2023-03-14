
 var ObjetosSeleccionados = [];
    

 function primeraFuncion() {
     const modalEntrada = new bootstrap.Modal("#modalEntrada");
     modalEntrada.show();
 }


 function addCart(objeto){
     
     var contenedor = objeto.parentElement.parentElement.parentElement;
    
     var nombre = contenedor.getElementsByTagName("h5")[0];
     var precio = contenedor.getElementsByTagName("h6")[0];
  
     var producto = {
         "nombre" : nombre.innerText,
         "precio" : precio.innerText,
         
         
     }
  
     ObjetosSeleccionados.push(producto);
 }


 function actualizarLista(){
     var lista = document.getElementById("listaCarrito");
    
     var texto = "";
     ObjetosSeleccionados.forEach(element => {
         texto = texto + "<div class='productoLista'>";
         texto = texto + "<p>"+element.nombre+"</p>";
         texto = texto + "<p>"+element.precio+"</p>";
         texto = texto + "</div>";
     });
     lista.innerHTML = texto;
 }

 function compraca(){
    alert("Gracias por la compra");


 }


 