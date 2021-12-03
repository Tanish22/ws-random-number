// const url = "ws://172.30.3.212:2200"
// const server = new WebSocket(url);

//server.send("from client 1")


const connect = document.getElementById("connect");

connect.onclick = () => {
  const url = "ws://172.30.3.212:2200"
  const server = new WebSocket(url);


  // onopen events signifies that the websocket connection has been established & futher operations can be performed 
  server.onopen = () => {
    console.log(`connected to ${url}`);
  }

  // logs msg from server onto the client's console
  server.onmessage = (e) => {
      const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100000000);
        return randomNumber;
      }

      const RandomNumber = generateRandomNumber();
    
      server.send(RandomNumber)
  }

}

