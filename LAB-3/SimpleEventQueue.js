let eventQueue = [];

function addEvent(event) {
    eventQueue.push(event);
    console.log("Event added:", event);
}

function processEvents() {
    while (eventQueue.length > 0) {
        let event = eventQueue.shift();
        console.log("Processing:", event);
    }
}

addEvent("Login");
addEvent("Send Message");
addEvent("Logout");

console.log("Processing Events:");

processEvents();