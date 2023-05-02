const input=document.getElementById("myinput");
const btn =document.getElementById("mybtn");
const btnc =document.getElementById("dlt");

const btnclick =()=>{
// alert(input.value);//
sessionStorage.setItem("key1",input.value);
};


btn.addEventListener("click",btnclick);
btnc.addEventListener("click",()=>{
// sessionStorage.removeItem("key1");
sessionStorage.clear();
});



// alert(sessionStorage.getItem("key1"));
// if(sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1"));
// }


// localstorage is same as sessionstorga


