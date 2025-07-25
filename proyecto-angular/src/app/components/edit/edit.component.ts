import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project: Project;
  public save_project; 
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
      private _projectService: ProjectService,
      private _uploadService: UploadService,
      private _route: ActivatedRoute,
      private _router: Router
  ){
      this.title = "Editar Proyecto";
      this.url = Global.url;
   }

   ngOnInit() {
    this._route.params.subscribe(params => {
        let id = params.id;

        this.getProject(id);
    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      }, 
      error => {
        console.log(<any>error);
      }
    )
  }

  onSubmit(){
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){

          //Esta parte es para subir la Imagen
          if(this.filesToUpload){
                this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
                .then((result:any) => {
                  this.save_project = result.project;
                  this.status = 'success';
                });
          }else{
            this.save_project = response.project;
            this.status = 'success';
          }

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
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
