let head=document.getElementsByTagName('h1')
head[1].addEventListener('click',()=>{head[1].innerHTML="Hello World"})
//Q,5
let repl=document.getElementById('replace');
function replace(){
 repl.innerHTML="Welcome to Elevation academy";
}
//Q.6
let count=0;
head[2].addEventListener('click',()=>{
  
    if(count%2===0)
    {
        head[2].style.color="red";
        count++;
    }
    else{
        head[2].style.color="blue";
        head[2].innerHTML="Hello World"
        count--; 
    }
})
//Q.7

