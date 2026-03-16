// import fs from 'fs'
// fs.readFile("text.txt", "utf-8", (err, data) => {
//     if(err){
//         console.log("Error reading file")
//     } else {
//         console.log("Data read from file is: ", data) }

// })

// import fs from 'fs'
// fs.readFile("text.txt", {encoding: "utf-8"}, (err, data) => {
//     if(err){
//         console.log("Error reading file")
//     } else {
//         console.log("Data read from file is: ", data) 
//     }
// })
// console.log("Order a bottle of protein")


//readFileSync()
// import fs from 'fs'
// let data = fs.readFileSync("text.txt", "utf-8")
// console.log("The content if the file are : ", data)



// readFileSync() with try...catch
import fs from 'fs';
try {
    let data = fs.readFileSync("text.txt", "utf-8");
    console.log("The content of the file is:", data);
} 
catch (error) {
    console.log("Error reading the file:", error.message);
}