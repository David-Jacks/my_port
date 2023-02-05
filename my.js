///light and dark mode

document.querySelector(".backgroundChange").addEventListener("click", () =>{
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")){
        document.querySelector(".backgroundChange").innerHTML = "Dark🌙";
    }else{
        document.querySelector(".backgroundChange").innerHTML = "Light🌞";
    }
})