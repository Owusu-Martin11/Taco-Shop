//alert("You're Welcome!\nAccept cookies");
//let boolean = confirm("Okay ===True\nCancel ===False");
//console.log(boolean);


const year = document.querySelector("#year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear 