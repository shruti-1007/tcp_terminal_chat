const net = require('net');
const readline = require("readline");
const client = net.createConnection({
    host: 'localhost',
    port: 3000
})
client.on("connect", () => {
    // console.log("Connected to the server!");
    rl.question("Enter your username: ", (username) => {
    client.write(`USERNAME:${username}`);
});
    
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



client.on("data", (data) => {
    console.log(data.toString());
});





rl.on("line", (input) => {
    // console.log(input);
    client.write(input);
});

client.on("close", () => {
    console.log("Disconnected from server");
    process.exit(0);
});