let body = document.getElementsByTagName("body")[0]
let btn = document.getElementById("btn")
let img = document.getElementById("btn-img")

function changeTheme() {
    let b = body.classList.toggle("light")
    if (body.classList.contains("light")) {
        img.src = "dark.svg"
    }else{
        img.src = "light.svg";
    }
}

btn.addEventListener("click",changeTheme)