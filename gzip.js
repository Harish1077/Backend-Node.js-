import zlib from 'zlib'
let data = "This is node js class"
zlib.gzip(data, (err, buffer)=>{
    if(err){
        console.log("Error in compression")
    }
    else{
    console.log("The compressed data is", buffer.toString())
    }
    zlib.gunzip(buffer, (err, buf)=>{
        if(err){
            console.log("Erroe in decompression")
        }
        else{
        console.log("The decompressed data is ",buf.toString())
        }
    })
})