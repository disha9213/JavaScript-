let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+" from Apna College Students";

let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText="New Unique Value 1";
// divs[1].innerText="New Unique Value 2";
// divs[2].innerText="New Unique Value 3";
// !!!OR!!!
let index=1;
for(divs of divs){
    divs.innerText=`new unique value ${index}`;
    index++;
}