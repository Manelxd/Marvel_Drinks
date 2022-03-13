function bebidas(){
    document.body.style.background = "#050706"
    document.querySelector(".home").style.display = "none"
    document.querySelector(".about").style.display = "none"
    document.querySelector("#bebidas").style.display = "flex"
    document.querySelector(".navbar").style.position = "relative"

}

function outros(){
    document.getElementById("outros").style.display = "flex"
    document.getElementById("cervejas").style.display = "none"

}

function cervejas(){
    document.getElementById("outros").style.display = "none"
    document.getElementById("cervejas").style.display = "flex"
}