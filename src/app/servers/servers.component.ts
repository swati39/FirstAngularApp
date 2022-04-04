import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'Server Not Created Yet';
  serverName = 'Test Server';
  userValue = '';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server2'];
  paraView = false;
  count: number = 0;
  log = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 5000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  preview() {
    this.paraView = !this.paraView;
    this.log.push(this.log.length + 1);
    console.log(this.count++);
  }
}
