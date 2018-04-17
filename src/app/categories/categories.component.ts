import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
kategorie:string[];
  constructor() {
    this.kategorie=[
      "Muzyka",
      "Gry",
      "Dokumentalne",
      "Moda",
      "Sport",
      "Motoryzacja",
      "Filozofia",
      "Religia",
      "Elektronika",
      "Vlogi",
      "Śmieszne",
      "Nauka",
      "Przyroda",
      "Gastronomia",
    ]
   }

  ngOnInit() {
  }

}
