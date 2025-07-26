import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { TPost } from '../../types/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  posts: TPost[] = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Content 1',
      author: 'Author 1',
      createdAt: '2022-01-01',
      updatedAt: '2022-01-01',
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content 2',
      author: 'Author 2',
      createdAt: '2022-01-02',
      updatedAt: '2022-01-02',
    },
  ];

  ngOnInit() {
    console.log('HomeComponent ngOnInit');
  }
}
