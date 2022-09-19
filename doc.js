// clic th bar

let i = document.getElementById("i");
let ulLinks = document.getElementById("ul");
let containerLinks = document.querySelector(".links-bar")


i.onclick = () => {

    ulLinks.classList.toggle("open")

    i.classList.toggle("back")

}

document.onclick = (e) => {

    if(e.target !== i && e.target !== containerLinks) {

        ulLinks.classList.remove("open")

        i.classList.remove("back")

    }
}

// who was before

// i.addEventListener("click", clic)

// document.onclick = (e) => {
//     if(e.target.id != 'i') {
//         ul.style.display = "none";
//         i.style.backgroundColor = ""
//     }else {
//         ul.style.display === "block"
//     }
// }


// function clic() {
//     if (ul.style.display === "none") {
//         ul.style.display = "block";
//         i.style.backgroundColor = "rgba(60,64,67,.08)"
//     }else {
//         ul.style.display = "none";
//         i.style.backgroundColor = ""
//     }
// }

// the mainuo

