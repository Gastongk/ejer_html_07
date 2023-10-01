document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el elemento canvas y su contexto
    var canvas = document.getElementById("miCanvas");
    var ctx = canvas.getContext("2d");

    // Dibujamos un círculo rojo en el canvas
    ctx.beginPath(); // Iniciamos el camino
    ctx.arc(100, 100, 50, 0, 2 * Math.PI); // (x, y, radio, inicio en radianes, fin en radianes)
    ctx.fillStyle = "red"; // Color de relleno rojo
    ctx.fill(); // Rellenamos el círculo
    ctx.closePath(); // Cerramos el camino
});