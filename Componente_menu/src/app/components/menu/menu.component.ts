import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:object[] = [
    {
      name: "PINCHO DE POLLO AL PIMENTÓN:",
      descripcion: "4 pinchos de pollo preparados en aceite de oliva, salpimentados y adobados durante 3 horas, salteados al sartén.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/Pinchos_Pollo.jpg",
      precio: "$ 10.000"
    },
    {
      name: "ROLLITOS DE CARPACCIO DE TERNERA :",
      descripcion: "6 rollos. Tajadas de carpaccio rellenas de rúcula, y dátiles(almendras) con un chorrito de aceite y salpimentadas.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/rollo_carpacho.jpg",
      precio: "$ 10.000"
    },
    {
      name: "CHULETITAS DE CONEJO AL HORNO:",
      descripcion: "200 gr de chuletitas de conejo bañadas en mojo de aceite de oliva, ajo y perejil, horneadas 5 minutos en el horno.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/chuletas-conejo-01.jpg",
      precio: "$ 10.000"
    },

  ]
    
  constructor() { }

  ngOnInit(): void {
  }

}
