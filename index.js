// Script para el archivo index.html

// Crear constante para el botón de lanzamiento del satélite
const botonEmerge=document.getElementById("btn-index-launch");

// Agregar evento click al botón para detectar acción del usuario y mostrar el satélite
botonEmerge.addEventListener("click", function(){
    // Constantes para el tamaño (ancho y alto)
    const anchoVentana=Math.floor(400);
    const altoVentana=Math.floor(300);

    // Crear la ventana emergente con el satélite
    let ventanaEmergente=window.open("satelite.html", "Satelite", 
        `width=${anchoVentana}, height=${altoVentana}, top=${(screen.availHeight - altoVentana)/2}, left=${(screen.availWidth - anchoVentana)/2}`
    );
});



