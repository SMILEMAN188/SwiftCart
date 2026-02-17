document.getElementById("hero").style.display = "block";
document.getElementById("support").style.display = "block";

document.getElementById("products").style.display = "none";

document.getElementById("shop").addEventListener("click",function (event) {
    event.preventDefault();

    document.getElementById("hero").style.display = "none";
    document.getElementById("support").style.display = "none";

    document.getElementById("products").style.display = "block";
})

document.getElementById("home").addEventListener("click",function (event) {
    event.preventDefault();

    document.getElementById("hero").style.display = "block";
    document.getElementById("support").style.display = "block";

    document.getElementById("products").style.display = "none";
})