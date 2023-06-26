import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/model/Producto';

@Component({
  selector: 'app-reporteproducto',
  templateUrl: './reporteproducto.component.html',
  styleUrls: ['./reporteproducto.component.css']
})
export class ReporteproductoComponent implements OnInit {

  productos: Producto[] = [];
  dataSource: MatTableDataSource<Producto> = new MatTableDataSource();

  displayedColumns: string[] = ['idProducto', 'Nombre', 'Tipo', 'Cantidad', 'PrecioU'];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductosByPriceRange();
  }

  getProductosByPriceRange(): void {
    const precioMinimo = 10; // Reemplaza con el precio mínimo deseado
    const precioMaximo = 50; // Reemplaza con el precio máximo deseado

    this.productoService.getProductosByPriceRange(precioMinimo, precioMaximo)
      .subscribe((data: Producto[]) => {
        this.productos = data;
        this.dataSource.data = data;
      });
  }
}
