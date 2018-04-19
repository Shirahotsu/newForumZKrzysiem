import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent implements OnInit {
  elo:any;
  constructor(public http: HttpClient) {
    this.http.get("http://localhost/W%20trakcie/forum-arekrzychu/src/assets/php.php").subscribe(data => {
      this.elo = data;
  });
   }
  ngOnInit() {
  }
  
}