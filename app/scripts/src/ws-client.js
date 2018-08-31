let socket;

function init (url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  }
}

function registerMessageHandle(handlerFunction) {
  socket.onmessage = (e) => {
    console.log('message', e.data);
    let data = JSON.parse(e.data);
    handlerFunction(data);
  }
}

function registerCloseHandle(handlerFunction) {
  socket.onclose = (e) => {
    console.log('close', e);
    let data = e.type;
    handlerFunction(data);
  }
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandle,
  registerCloseHandle,
  sendMessage
}
