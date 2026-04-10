import fs from 'fs'
import zlib from 'zlib'
let r = fs.createReadStream("product.json")
let w = fs.createWriteStream("prod.gz")
let gzip = zlib.createGzip()
r.pipe(gzip).pipe(w)