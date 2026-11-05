// Script para el archivo satelite.html 

// Extraer datos del navegador y SO del usuario (guardar en variable)
let navInfo = window.navigator.userAgent;

// Descomponer la string para extraer el sistema operativo y guardarlo en variable
let systemInfo = navInfo.split("(")[1].split(")")[0];

// Expresiones regulares para recoger la coincidencia con el sistema operativo
const WindowsRE = /Windows/;
const LinuxRE = /Linux/;
const MacRE = /Macintosh/;

// Variable para guardar el mensaje del sistema operativo del usuario
let systemMessage = "";

// Comprobar el sistema operativo del usuario 
if (WindowsRE.test(systemInfo)){
    systemMessage = "Windows";
}
else if (LinuxRE.test(systemInfo)){
    systemMessage = "Linux";
}
else if (MacRE.test(systemInfo)){
    systemMessage = "MacOS";
}
else{
    systemMessage = "sistema operativo no identificado";
}

// Console logs para comprobar info en la terminal
console.log(navInfo);
console.log(systemInfo);
console.log(`El sistema operativo del usuario es: ${systemMessage}`);

// Acceder al mensaje de bienvenida para escribirlo en el HTML
const text=document.getElementById("welcome-msg");
text.innerHTML = `Bienvenido al satélite, usuario de ${systemMessage}`;

// Crear constante para el botón de redirigir con historial
const botonHistorial=document.getElementById("btn-satelite-history");

// Agregar evento click al botón para redirigir al usuario a la página con historial
botonHistorial.addEventListener("click", ()=>{
    // Log para registrar actividad
    console.log("Redirigiendo con historial...");
    window.opener.location.assign("https://www.ilerna.es/");
});

// Crear constante para el botón de redirigir sin historial
const botonSinHistorial=document.getElementById("btn-satelite-no-history");

// Agregar evento click al botón para redirigir al usuario a la página sin historial
botonSinHistorial.addEventListener("click", ()=>{
    // Log para registrar actividad
    console.log("Redirigiendo sin historial...");
    window.opener.location.replace("https://www.ilerna.es/");
});

// Crear constante para el botón temporizador de autodestrucción del satélite
const botonAutodestruccion=document.getElementById("btn-satelite-destroy");

// Agregar evento click al botón para iniciar el temporizador de autodestrucción del satélite
botonAutodestruccion.addEventListener("click", ()=>{
    
    // Mensaje de alerta de autodestrucción nada más pulsar el botón
    window.alert("¡Autodestrucción en 5 segundos!");
    
    // Mensaje mientras se ejecuta la cuenta atrás
    const timerText=document.getElementById("timer");
    let countdown = 4; // Iniciar la cuenta atrás desde 4 porque el mensaje inicial ya cuenta el primer segundo

    // Iniciar el temporizador, cerrando la ventana tras 5 segundos
    setTimeout(closeWindow, 5000);

    // Intervalo para actualizar el mensaje de cuenta atrás cada segundo
    setInterval(updateTimer, 1000);

    // Función para cerrar la ventana emergente después de 5 segundos
    function closeWindow(){
        window.close();
    }

    // Función para actualizar el mensaje de cuenta atrás cada segundo
    function updateTimer(){
        timerText.innerHTML = `Autodestruyéndose en ${countdown} segundos...`;
        countdown--;
    }
});