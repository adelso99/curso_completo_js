import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRouter, Params } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRouter
  ){
    this.url = Global.url;
  }

  ngOnInit() {
  }

  getProject(id){

  }

}
