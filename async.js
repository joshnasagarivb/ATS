let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return resolve(7)
    },10000);
})
 
function demo(){
    console.log("Start");
    let a =9;
    p1.then((res)=>{
        console.log("Res",res)
        a= a+res;
        console.log(a);
    })
    console.log("End",a)
 
}
 
async function demo1(){
    console.log("Start");
    let data = await p1;  // 10 sec wait  promise {7}
    console.log("data",data);
    console.log("end");
}
 
demo();
demo1();

