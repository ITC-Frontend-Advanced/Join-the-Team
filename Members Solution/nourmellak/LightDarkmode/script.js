const togllebutton = document.getElementById("togel-theme");
const savedtheme = localStorage.getItem("theme");

if (savedtheme === "dark"){
    document.body.classList.add("dark");
    togllebutton.textContent = "Light mode"
}

togllebutton.addEventListener("click" , () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        togllebutton.textContent ="Light mode";
    }else{
        localStorage.setItem("theme","light ");
        togllebutton.textContent = "Dark mode";
    }
});