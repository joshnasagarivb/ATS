let array3=[2,3,4,5,6,7,8,2,3,4,5,6,7,8];
let output=[...new Set(array3)];
console.log(output);

let f=["Joshna","Deepika","Vijay","Elluru","Banala","Naveen","cutu"];
f.shift();
console.log(f);
f.pop();
console.log(f);
f.push("cutu");
console.log(f);
f.unshift("Joshna");
console.log(f);
f.splice(2,1,"Deepika");
console.log(f);
f.splice(2,0,"Deepika");
console.log(f);