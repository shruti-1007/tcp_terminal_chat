const net = require('net');
const clients=[]
const server = net.createServer((socket)=>{
    console.log('Client connected');
    clients.push(socket);
    // socket.write('Hello from server!\n');
    
    socket.on("data", (data) => {
    const message = data.toString();

    // console.log(message);
    if (message.startsWith("USERNAME:")) {
    socket.username = message.substring(9);

    console.log(`${socket.username} joined the chat`);

    return;
}

    clients.forEach((client) => {
        if (client !== socket) {
        client.write(`${socket.username}: ${message}`);
        }
    });
});

socket.on("close", () => {
    console.log(`${socket.username} left the chat`);

    clients.forEach((client) => {
        if (client !== socket) {
            client.write(`${socket.username} left the chat\n`);
        }
    });

    const index = clients.indexOf(socket);

    if (index !== -1) {
        clients.splice(index, 1);
    }
});


socket.on("error", (err) => {
    console.log("Socket error:", err.code);
});


});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});