document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscarP")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".prolist").forEach(listpro =>{
  
            listpro.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?listpro.classList.remove("filtro")
              :listpro.classList.add("filtro")
        })
  
    }
  
  
  })