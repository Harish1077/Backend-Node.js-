import http from 'http'
import fs from 'fs'

let server = http.createServer((req, res)=>{
    if(req.url == "/"){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(`
            <h3>Click on the button to view the data</h3>
            <a href="/fetchdata"><button>Fetch data</button></a>
        `)
    }

    else if(req.url == '/fetchdata'){
        fs.readFile("product.json", "utf-8", (err, data)=>{
            if(err){
                res.writeHead(404, {'content-type': 'text/html'})
                res.end("<p>No data found</p>")
            }
            else{
                let products = JSON.parse(data)

                let rows = products.map((product)=>{
                    return `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                    </tr>`
                }).join("")

                res.writeHead(200, {'content-type': 'text/html'})
                res.end(`
                    <table border="1">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        ${rows}
                    </table>
                `)
            }
        })
    }

    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end("Page not found")
    }
})

server.listen(1077)