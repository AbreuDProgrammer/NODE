const http = require('http');
const options = {
    hostname: '192.168.20.47',
    port : 2412,
    path: "/pessoas",
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
}
const req = http.request(options, (res)=>{
    console.log(`statusCode: ${res.statusCode}`);
    res.on('data',(d)=>{
        process.stdout.write("Res SERVER -> "+d+'\n');
    });
});
req.on('error', (error)=>{
    console.log(error);
});
req.end();