import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    
    const id: number = +this.activatedRoute.snapshot.queryParams['id'];
    //this.server = this.serversService.getServer(id);
    // this.activatedRoute.queryParams.subscribe((params: Params) => {
    //   const obj = this.serversService.getServer(+params['id']);
    //   console.log(obj);
    // });
  }
}
