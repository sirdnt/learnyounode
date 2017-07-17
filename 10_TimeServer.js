var net = require('net')
var server = net.createServer(function (socket) {
    socket.write(now());
    socket.end("\n");
})

function zeroFill(input){
    return (input<10?'0':'')+input;
}

function now(){
    var date = new Date();
    return date.getFullYear()+'-'+zeroFill(date.getMonth()+1)+'-'+zeroFill(date.getDate())+' '+zeroFill(date.getHours())+":"+zeroFill(date.getMinutes());
}

server.listen(process.argv[2]);