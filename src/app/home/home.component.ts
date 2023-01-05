import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  
  handleNavigation(id: number) {
    const url = ['./servers', id, 'edit'];
    this.router.navigate(url, {
      queryParams: { allowEdit: '1' },
      fragment:'loading',
      relativeTo: this.activatedRoute,
    });
  }
}
