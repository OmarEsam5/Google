// clic th bar

let i = document.getElementById("i");
let ul = document.getElementById("ul");

i.addEventListener("click", clic)

document.onclick = (e) => {
    if(e.target.id != 'i') {
        ul.style.display = "none";
        i.style.backgroundColor = ""
    }else {
        ul.style.display === "block"
    }
}


function clic() {
    if (ul.style.display === "none") {
        ul.style.display = "block";
        i.style.backgroundColor = "rgba(60,64,67,.08)"
    }else {
        ul.style.display = "none";
        i.style.backgroundColor = ""
    }
}

// the mainuo

