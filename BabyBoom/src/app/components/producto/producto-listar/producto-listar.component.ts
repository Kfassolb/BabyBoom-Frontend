import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/Producto';
import { ProductoService } from 'src/app/service/producto.service';
import { ProductoDialogoComponent } from './producto-dialogo/producto-dialogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-producto-listar',
  templateUrl: './producto-listar.component.html',
  styleUrls: ['./producto-listar.component.css']
})
export class ProductoListarComponent implements OnInit {
  lista: Producto[] = [];
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'cantidad', 'preciounitario','accion1'];
  idMayor: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator; //THIS
  private idHigh:number=0;

  constructor(private pS: ProductoService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.pS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pS.getList().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    });
    this.pS.getConfirmarEliminar().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }

  confirmar(id: number){
    this.idMayor = id;
    this.dialog.open(ProductoDialogoComponent);
  }

  eliminar(id:number){
    this.pS.eliminar(id).subscribe(() =>{
      this.pS.list().subscribe(data=>{
        this.pS.setList(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    })
  }

  filtrar(e:any){
    this.dataSource.filter = e.target.value.trim();
  }
}
