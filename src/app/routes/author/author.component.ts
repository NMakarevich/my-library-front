import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  public id!: string;
  constructor(private readonly route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }
}
