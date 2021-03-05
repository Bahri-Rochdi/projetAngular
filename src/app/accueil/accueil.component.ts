import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fakeArray(length: number): Array<any> {
    if (length >= 0) {
      return new Array(length);
    }
  }

}
