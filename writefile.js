// import fs from 'fs'
// let data = "Harish file is dangerous 3232323."
// fs.writeFile("text.txt", data, "utf-8", (err) => { 
//     if(err){
//         console.log("Error writing to file")
//     } else {
//         console.log("Data written to file successfully")
//     }
// })

//create an object {name:"harish, address:"Bangalore", age:24} and write it to a file in json format

import fs from 'fs'
let obj = {name:"harish", address:"Bangalore", age:24}
let jsonData = JSON.stringify(obj)
fs.writeFile("data.json", jsonData, "utf-8", (err) => {
    if(err){
        console.log("Error writing to file")
    } else {
        console.log("Data written to file successfully")
    }
})
