import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-employeur',
  templateUrl: './header-employeur.component.html',
  styleUrls: ['./header-employeur.component.css']
})
export class HeaderEmployeurComponent implements OnInit {
  cheminImage:String = "assets/findJob.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
