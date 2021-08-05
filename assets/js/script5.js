let add1 = document.getElementById("add1");
let add2 = document.getElementById("add2");
let add3 = document.getElementById("add3");
let add4 = document.getElementById("add4");
let add5 = document.getElementById("add5");
let add6 = document.getElementById("add6");
let add7 = document.getElementById("add7");
console.log(add7)
let obj = {}
let array = [];



add1.onclick = function(){
    let p1 = document.getElementById('p1').textContent;
    let t1 = document.getElementById('t1').textContent;
    
    obj = {
        titulo:t1,
        parrafo:p1
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array); 
}


add2.onclick = function(){
    let p2 = document.getElementById('p2').textContent;
    let t2 = document.getElementById('t2').textContent;
    obj = {
        titulo:t2,
        parrafo:p2
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array); 
    
}

add3.onclick = function(){
    let p3 = document.getElementById('p3').textContent;
    let t3 = document.getElementById('t3').textContent;
    obj = {
        titulo:t3,
        parrafo:p3
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array); 
}

add4.onclick = function(){
    let p4 = document.getElementById('p4').textContent;
    let t4 = document.getElementById('t4').textContent;
    obj = {
        titulo:t4,
        parrafo:p4
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array); 
}

add5.onclick = function(){
    let p5 = document.getElementById('p5').textContent;
    let t5 = document.getElementById('t5').textContent;
    obj = {
        titulo:t5,
        parrafo:p5
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array); 
}

add6.onclick = function(){
    let p6 = document.getElementById("p6").textContent;
    let t6 = document.getElementById('t6').textContent;
    obj = {
        titulo:t6,
        parrafo:p6
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array); 
}

const getData = (titulo,parrafo) => {
    this.titulo = titulo;
    this.parrafo = parrafo;

    obj = {
        titulo:titulo,
        parrafo:parrafo
    }

    array.push(obj);
    localStorage.setItem('favoritos',JSON.stringify((array)));

    console.log(array);
}
