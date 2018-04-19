import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  elo:any;
  constructor(public http: HttpClient) {
    this.http.get("aa").subscribe(data => {
      console.log(data);
  });
   }
  ngOnInit() {
  }
}