//create an http server such that when the user goes to the / login url, a log is appended in a file named "server.log"

import http from "http"
import fs from "fs"
const PORT = 1077
let server = http.createServer((req, res)=>{
    if(req.url === "/login"){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end("welcome to the login page")
        let log = `user logged in at ${new Date().toLocaleString()} \n`
        fs.appendFile("server.log", log, "utf-8", (err) => {
            if(err){
                console.log("Error writing to log file")
            } else {
                console.log("Log appended to file successfully")
            }
        })
    }
})
server.listen(1077)