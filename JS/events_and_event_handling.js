// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function(){
//     h1.style.color = "red";
// });

// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     p.style.color = "green";
// });

// let p = document.querySelector("p");

// function dblclick(){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick",dblclick);

// p.removeEventListener("dblclick", dblclick);

// let p = document.querySelector("p");

// p.addEventListener("click",function(){
//     p.style.color = "red";
// });

// let inp = document.querySelector("input");

// inp.addEventListener("input",function(evt){
//     console.log(evt.data);
// });

// let inp = document.querySelector("input");

// inp.addEventListener("input",function(dt){
//     if(dt.data !== null){
//         console.log(dt.data);
//     }
// });

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change",function(dets){
    device.textContent = `${dets.target.value} Device Selected`;
});