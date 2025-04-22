//1st type of function
function demo(){
    console.log("Welcome Teams!");
    return "Naveen"
}
let a=demo();
console.log(a);

//2nd type of function
function Parameterised(a,b){
    console.log("Welcome Teams!",a,b);
    return b;
}
let b=Parameterised("Naveen","Joshna");
console.log(b);

//3rd type of function
async function demo3(name) {
    return name;
}
console.log(demo3("Naveen"),"async function");

//4th type of function
let c=()=>{
    console.log("Arrow function");
    return "81297"
}
console.log(c(),"Arrow function");

//5th type of function
let d = function() {
    console.log("Anonymous function");
    return "97128"
}
console.log(d(),"Anonymous function");

//6th type of function
(function() {
    console.log("APRIL!");
})();
console.log("Love you My Family!","I am happy to be with you all!");
