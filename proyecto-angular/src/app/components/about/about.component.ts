import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  public title: string;
  public subtitle: string;
  public web: string;

  constructor() { 
    this.title = "Adelso Hernandez";
    this.subtitle = "Desarrollador Web";
    this.web = "github.com/adelso99";
  }

  ngOnInit() {
  }

}
