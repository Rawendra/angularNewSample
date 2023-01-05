import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  selectedUser: { name: string; id: string };
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    console.log('ng onInit from user component')
    this.selectedUser = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name'],
    };

    this.activatedRoute.params.subscribe((params:   Params) => {
      this.selectedUser.id = params['id'];
      this.selectedUser.name = params['name']
    });
  }

  handleNavigationAnnaUser() {
    const url = ['users', 10, 'Anna'];
    this.router.navigate(url);
  }
}
