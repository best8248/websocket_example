var WebSockets = require("ws").Server;

var wss = new WebSockets({port:3001});

wss.on("connection", function(ws) {
    ws.send("연결완료");

    ws.on("message", function(message) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === 1) {
                client.send(message);
            }
        });
    });
});
