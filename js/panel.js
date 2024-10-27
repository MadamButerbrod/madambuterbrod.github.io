/**add new message to panel*/
function add_message() {
    const node = document.getElementById("panel").lastElementChild;
    const clone = node.cloneNode(true);
    document.getElementById("panel").appendChild(clone);
}

const eventSource = new EventSource('http://localhost:8080/panel-events')
eventSource.onmessage = function (event) {
    console.log('Message received: ', event.data);
    add_message();
  }

  eventSource.onerror = function (event) {
    console.error('An error occurred:', event)
  }