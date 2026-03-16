import fs from 'fs'
let readstream = fs.createReadStream("test.txt", {encoding:"utf-8", start:2, end:5})
readstream.on("data", (chunk)=> {
    console.log(chunk)
})
readstream.on("end", ()=> {
    console.log("This needs to be used only when the file has been read")
})
readstream.on("error", (err)=>{
    console.log;ongamepadconnected("Error in reading from the file: ", err.message)
})