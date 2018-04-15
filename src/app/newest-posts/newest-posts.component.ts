import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newest-posts',
  templateUrl: './newest-posts.component.html',
  styleUrls: ['./newest-posts.component.css']
})
export class NewestPostsComponent implements OnInit {
  posty: posty[];
  constructor() {
    this.posty=[
      {
        id:1,
        header:"elo"
      },
      {
        id: 2,
        header: "Jokaaaa"
      },
      {
        id: 3,
        header: "Karooool"
      },
      {
        id: 4,
        header: "Dzban"
      }
    ]

   }

  ngOnInit() {
  }

}
export interface posty{
  id: number;
  header: string;
}