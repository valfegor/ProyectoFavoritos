let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let add3 = document.getElementById("add3");
let add4 = document.getElementById("add4");
let add5 = document.getElementById("add5");
let add6 = document.getElementById("add6");
let add7 = document.getElementById("add7");

console.log(add3)

let array = [];
let obj = {};

add1.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t7").textContent;
    let parrafo = document.getElementById("p7").textContent;
    getData(titulo,parrafo);
}

add2.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t2").textContent;
    let parrafo = document.getElementById("p2").textContent;
    getData(titulo,parrafo);
}

add9.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t3").textContent;
    let parrafo = document.getElementById("p3").textContent;
    console.log(titulo,parrafo)
    getData(titulo,parrafo);
}

add4.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t4").textContent;
    let parrafo = document.getElementById("p4").textContent;
    getData(titulo,parrafo);
}

add5.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t5").textContent;
    let parrafo = document.getElementById("p5").textContent;
    getData(titulo,parrafo);
}

add6.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t6").textContent;
    let parrafo = document.getElementById("p6").textContent;
    getData(titulo,parrafo);
}
add7.onclick = function(){
    alert("titulo añadido a sus favoritos");
    let titulo = document.getElementById("t8").textContent;
    let parrafo = document.getElementById("p8").textContent;
    getData(titulo,parrafo);
}







const getData = (titulo,parrafo) =>{
    this.titulo = titulo;
    this.parrafo = parrafo;
    
    obj={
        titulo:titulo,
        parrafo:parrafo
    }
    array.push(obj);
    
    
    localStorage.setItem('favoritos5',JSON.stringify(array));

}
