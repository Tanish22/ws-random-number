const WebSocket = require("ws");

const wsServer = new WebSocket.Server({
  port: 2200
}, () => console.log("Websocket Connection Ready !!"));


// ws passed as a parameter is the actual client that successfully connected to the server
wsServer.on("connection", (ws) => {
  
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100000000);
    return randomNumber;
  }

  const RandomNumber = generateRandomNumber;

  // server sends message to the client (ws)

  // broadcast to every client that is connected
  ws.on("message", (data) => {
    wsServer.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})




// wsServer.on("connection", (ws) => {             // listening to the websocket server using connection event, ws refers to the connected client
//   ws.send("client 1 connected !!");

     // listening to the message from the client 
//   ws.on("message", (e) => {
//     console.log(`msg from client 1 ${e}`);
//   })
  
//   ws.on("close", () => {                        // when the connected client disconnects, close event is called on that client i.e. ws
//     console.log("Client 1 has disconnected !!");
//   })
// })

// wsServer.on("connection", (ws) => {             // listening to the websocket server using connection event, ws refers to the connected client
//   ws.send("client 2 connected !!");

//   ws.on("message", (e) => {
//     console.log(`msg from client 2 ${e}`);
//   })
  
//   ws.on("close", () => {                        // when the connected client disconnects, close event is called on that client i.e. ws
//     console.log("Client 2 has disconnected !!");
//   })
// })