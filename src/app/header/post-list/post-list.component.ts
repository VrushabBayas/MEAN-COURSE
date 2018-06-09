import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   { title: 'First Post', contenet: 'This is the First post' },
  //   { title: 'Second Post', contenet: 'This is the Second post' },
  //   { title: 'Third Post', contenet: 'This is the Third post' }
  // ];
  posts = [];
}
