const main = document.getElementById("main");
const body = document.body;
const buttons = document.querySelectorAll("button");

body.style.transition = "background-color 0.5s ease";

main.addEventListener("mouseover", () => {
    body.style.backgroundColor = "#bbdf74";
    buttons.forEach(btn => {
        btn.style.color = "white";
    });
    document.querySelector(".home").style.backgroundColor = "white";
    document.querySelector(".home").style.color = "black";
    document.querySelector("#top").style.color = "white";
    document.querySelector("#bottom").style.color = "white";
});

main.addEventListener("mouseout", () => {
    body.style.backgroundColor = "#787cdc";
    buttons.forEach(btn => {
        btn.style.color = "black"; 
    });
    document.querySelector(".home").style.backgroundColor = "black";
    document.querySelector(".home").style.color = "white";
    document.querySelector("#top").style.color = "black";
    document.querySelector("#bottom").style.color = "black";
});
