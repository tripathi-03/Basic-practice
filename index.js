const btn=document.querySelector("button");

// const printName = (name,income,male)=>{
//     console.log(`Welcome,${name}.your income is ${income} and you are male ${male}`);
    
// };


const printName =(name,income,male)=>{
    console.log(new Date(Date.now()));
}
// setTimeout(printName("Mani"),5000);
// const costomtimout=setTimeout(printName,2000,"abhis",2000,true);

// btn.addEventListener("click",()=>{
//     clearTimeout(costomtimout);
// });


const customtimeout=setInterval(printName,2000,"abhis",2000,true);
btn.addEventListener("click",()=>{
    clearInterval(customtimeout);
});








