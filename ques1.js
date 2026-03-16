//create an http server tot read the content of a studentdata.json file having the following data:
// { "name": "Harish" , "marks":99 }
// you are required to read from this file using fs.readfile() and print the content on the browser page in green color
import http from "http"
import fs from "fs"
const PORT = 1077
let server = http.createServer((req, res)=>{
    fs.readFile("studentdata.json", "utf-8", (err, data) => {
        if(err){
            res.writeHead(404, {'content-type': 'text/html'})
            res.write("<h1 style=color:red>Error reading file</h1>")
            res.end()
        } else {
            res.writeHead(200, {'content-type': 'text/html'})
        }     res.write(`<h1 style=color:green>${data}</h1>`)
            res.end()
    })
})
server.listen(PORT, ()=>{
    console.log(`Server is running on port No. ${PORT}`)
})