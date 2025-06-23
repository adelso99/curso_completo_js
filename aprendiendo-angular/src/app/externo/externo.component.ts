import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';


@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;
  public usuario_guardado;

  constructor(
    private _peticionesService: PeticionesService
  ){ 
    this.userId = 1;
    this.new_user = {
            "name": "",
            "job": ""
      };
  }

  ngOnInit() {
    this.fecha = new Date(2025, 5, 16);
    
    this.cargaUsuario();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe(
          result => {
            this.user = result.data;
          },
          error => {
            console.log(<any>error);
          }
      );
  }

  onSubmit(form){
     
    this._peticionesService.addUser(this.new_user).subscribe(
      response => {
        this.usuario_guardado = response;

        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

/*
Progreess ........1
*/

/*
Progreess ........2
*/

/*
Progreess ........3
*/

/*
Progreess ........4
*/
/*
Progreess ........5
*/

/*
Progreess ........6
*/

/*
Progreess ........7
*/

/*
Progreess ........8
*/

