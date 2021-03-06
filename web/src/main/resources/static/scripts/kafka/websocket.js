import {init} from "./svg.js";

let stompClient = null;

function connect() {
    let socket = new SockJS('/kafka');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/kafka', function (data) {
            console.log('kafka: ' + data.body);
        });
    });
}

$(function () {
    connect();
    init();
});