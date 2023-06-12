import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MatDialog } from '@angular/material/dialog'
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit{
  lista: User[]=[];
  dataSource: MatTableDataSource<User>=new MatTableDataSource();
  displayedColumns: string[]=['id', 'username', 'password','actualizar'];
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private uS: UsuarioService, private dialog:MatDialog){}

  ngOnInit(): void {
    this.uS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.uS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator; //THIS
    })
    this.uS.getConfirmDeletion().subscribe(data=>{
      data == true? this.delete(this.idHigh):false;
    })
  }
  confirm(id: number){
    this.idHigh = id;
    this.dialog.open(UsuarioDialogoComponent)
  }
  delete(id:number){
    this.uS.delete(id).subscribe(()=>{
      this.uS.list().subscribe(data=>{
        this.uS.setList(data); /* se ejecuta la línea 28 */
        this.dataSource = new MatTableDataSource(data); //THIS
        this.dataSource.paginator = this.paginator; //THIS
      })
    })
  }
  filter(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}

