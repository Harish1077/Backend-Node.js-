import fs from 'fs'
let writestream = fs.createWriteStream("test.txt", {encouding:"utf-8"})
writestream.write("This is the personal data")
writestream.end()
writestream.on("finish", ()=>{
    console.log("Finished writing into the file")
})
writeFile.on("error", ()=>{
    console.log("Error in writing into the file")
})
