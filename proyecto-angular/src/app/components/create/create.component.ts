import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project; 
  public status: string;

  constructor(
      private _projectService: ProjectService,
      private _uploadService: UploadService
  ){
      this.title = "Crear Proyecto";
      this.project = new Project('','','','',2025,'','');
   }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
          if(response.project){
              this.status = 'success';
              form.reset(); 
          }else{
              this.status = 'failed';
          }   
      }, 
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    console.log(fileInput);
  }

}
