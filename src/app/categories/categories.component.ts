import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
kategorie:kategorie[];
  constructor() {
    this.kategorie=[
      {
        title:"Muzyka",
        icon:"headphones"
      },
      {
        title: "Gastronomia",
        icon: "beer"
      },
      {
        title: "Przyroda",
        icon: "leaf"
      },
      {
        title: "Nauka",
        icon: "flask"
      },
      {
        title: "Śmieszne",
        icon: "smile"
      },
      {
        title: "Vlogi",
        icon: "camera"
      },
      {
        title: "Elektronika",
        icon: "microchip"
      },
      {
        title: "Religia",
        icon: "plus"
      },
      {
        title: "Filozofia",
        icon: "question"
      },
      {
        title: "Motoryzacja",
        icon: "car"
      },
      {
        title: "Sport",
        icon: "futbol"
      },
      {
        title: "Moda",
        icon: "shopping-bag"
      },
      {
        title: "Dokumentalne",
        icon: "search"
      },
      {
        title: "Gry",
        icon: "gamepad"
      }
    ]
   }

  ngOnInit() {
  }

}
export interface kategorie {
  title: string;
  icon: string;
}