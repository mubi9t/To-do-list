let btn = document.getElementById("btn");
let text = document.getElementById("text");
let one = document.getElementById("one");
let del = document.getElementById("del")
btn.addEventListener('click', () => {
    if (text.value == "") {
        alert("Please put any thing")
    }
    else {
        document.getElementsByTagName("li")[0].innerHTML += "<br>" + text.value;
    }
})
del.addEventListener('click', () => {
    document.getElementsByTagName("li")[0].innerHTML = "";
})