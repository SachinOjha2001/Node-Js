//Exp 1: Print "Hello World" 5 times
// let n=5;
// for (i=1; i<=n; i++){
//     console.log("Hello World");
// }
// console.log("End of Program");



//Exp 2: Print "Hello World" 5 times using  Process.argv
let args=process.argv;
for (let i=2; i<=args.length; i++){
    console.log("Hello To",args[i]);
}