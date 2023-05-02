// let arr = [12,33,44,10];
// let ar= new Array(1,2,3);
// // remove the last element form array 
// arr.pop();
// // remove the first element form array 
// arr.shift();
// // console.log(ar);

// let arr1=[1,2,3,4,5,6,7,8,9,12,13,14];
// arr1.splice(2,4);
// // console.log(arr1);
// arr1.reverse();

// let newar=arr1.slice(1,4);
// // console.log(newar);


// const muobj={
//     name:"Abhi",surname:"Singh",income:"200",male:"true",
// };
// const mubj={
//     0:"Abhi",1:"Singh",2:"200",3:"true",
// };
// // console.log(muobj.name);
// muobj.newData="beta";

// console.log(muobj);


// console.log("Hello World");
// let a=23;
// let b=45;

// // console.log(a+b);

// function printTheValue(){
//     let result=23*10+23*10+23*9 ;
//     console.log(result/10);
// }

// printTheValue();

// function printTheValu(a,b,c=0){
//     let result=c*10+b*10+a*10 ;
//     console.log(result/10);
// }

// function printTheVal(a,b,c=0){
//     let result=c*10+b*10+a*10 ;
//     return (result/10);
// }
// // printTheValu(10,2,4);
// // let name=`ABHI
// function intro(name="SAmple",channel="YT"){
//     console.log(`hi my name is ${name}.please subscribe to my ${channel} ASAP`);
//     console.log(`My salary is ${printTheVal(10,10,10)}`);
// }


// intro("abhise","ytt");
// let ar=[12 ,23,34,45,56,67];
// function tot(arr=[]){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(tot(ar));
// const thisone="Mani";
//  console.log(thisone);

//  console.log(document.getElementById("thisone"));

//  console.log(document.getElementsByClassName("ok"));

// console.log(document.getElementsByName("email"));


// const myfunc =(a,b)=>{
//     console.log(a+b);
// }

// myfunc(3,4);

// advance javascript functions

const arr=[1,2,3,4,5,6];
// const mufuc =(value,index)=>{
//     if(value==6){
//         console.log("6 exist");
//     }
// };
// arr.find(mufuc);

// const reu =arr.find((value,index)=>{
// if(value>2)return value;
// });
// console.log(reu);


// const result= arr.filter((value,index)=>{
// if(value<3)return value;
// });

// const result=arr.every((value,index)=>{
// return value <4;
// });
// const result=arr.some((value,index)=>{
//     return value <4;
//     });

// for( const element of arr){

//     console.log(element);
// }
// let totalsum=0;
// arr.forEach((value,index)=>{
//     // console.log(value);
//     totalsum+=value;
// });

// const result = arr.forEach((value,index)=>{return value+20 ;}); // this is erroeful so we use arr.map 

const result=arr.map((value,index)=>{return value+20;});

// const result=arr.reduce((total,value,index)=>{return total});

console.log(result);





