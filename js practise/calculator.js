const s1 = document.getElementById("a");
const s2 = document.getElementById("b");
console.log(typeof(s1.innerText));
function add()
{
    const res = parseInt(s1.innerText)+parseInt(s2.innerText);
    console.log(typeof(parseInt(s1.innerText)));
    const result = document.getElementById("result");
    result.textContent = res ;
    console.log("addclicked");
}
function substract()
{
    let res = s1.textContent - s2.textContent;
    let result = document.getElementById("result");
    result.textContent = res ;
    console.log("subclicked");
}
function mul()
{
    let res = s1.textContent * s2.textContent;
    let result = document.getElementById("result");
    result.textContent = res ;
    console.log("mulclicked");
}
function div()
{
    let res = s1.textContent / s2.textContent;
    let result = document.getElementById("result");
    result.textContent = res ;
    console.log("divclicked");
}