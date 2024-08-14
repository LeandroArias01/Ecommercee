document.addEventListener("DOMContentLoaded", function() {
    var saludo = document.getElementById("saludo");
    saludo.style.display = "block";


    setTimeout(function() {
        saludo.style.display = "none";
    }, 3000);
});