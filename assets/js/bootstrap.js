let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let add3 = document.getElementById("add3");
let add4 = document.getElementById("add4");
let favoritos2 = localStorage.getItem('favoritos2');
let array = [];
let obj = {};

add1.onclick = function () {
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t7").textContent;
    let parrafo = document.getElementById("p7").textContent;
    getData(titulo, parrafo);
}

add2.onclick = function () {
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t2").textContent;
    let parrafo = document.getElementById("p2").textContent;
    getData(titulo, parrafo);
}
add3.onclick = function () {
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t3").textContent;
    let parrafo = document.getElementById("p3").textContent;
    getData(titulo, parrafo);
}

add4.onclick = function () {
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t4").textContent;
    let parrafo = document.getElementById("p4").textContent;
    getData(titulo, parrafo);
}





const getData = (titulo, parrafo) => {
    this.titulo = titulo;
    this.parrafo = parrafo;

    prueba = obtenerFavoritos2();

    console.log(prueba)


    obj = {
        titulo: titulo,
        parrafo: parrafo
    }
    
    array.push(obj);
    localStorage.setItem('favoritos2',JSON.stringify(array));






}

const obtenerFavoritos2 = () => {
    if (favoritos2 == null) {
        array = [];
    }
    else {
        array = JSON.parse(favoritos2);
    }
    return array;
}