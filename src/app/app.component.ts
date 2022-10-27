import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client/dist/socket.io';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


// install socket.io-client

export class AppComponent implements OnInit {
  name = 'Angular';
  socket: io.Socket;
    token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyIiwiZGlzcGxheW5hbWUiOiJ0ZXN0aW5nIDQ1MTIiLCJlbWFpbCI6ImhhaWxyaWRlcmR1ZHdhc2RmbW15QGRlbW8uY29tIiwidHlwZSI6InJpZGVyIiwiaWF0IjoxNTYzNDQxMDIyLCJleHAiOjE1NjYwMzMwMjJ9.ugvVG2jAF9bm4vg53pb9_3ZYM-taWMaaHjGTesHCVnE';
    SOC_URL = 'http://192.168.0.115:3001';
    constructor() {
    }

    ngOnInit() {
        this.socket = io.connect(this.SOC_URL, { query: { token: this.token }, 'forceNew': true });
        console.log(this.socket);
    }
}
