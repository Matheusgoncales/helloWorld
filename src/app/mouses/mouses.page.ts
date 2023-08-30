import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.page.html',
  styleUrls: ['./mouses.page.scss'],
})
export class MousesPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [

    {
      nome: "mouse kobra m711",
      descricao: "Redragon rgb",
      valor: 129.90,
      foto:"https://images-na.ssl-images-amazon.com/images/I/61FnLJfIU6L._SL1500_.jpg"
    },
    {
      nome: "mouse g403",
      descricao: "mouse logitech g403 ",
      valor: 279.90,
      foto:"https://th.bing.com/th/id/OIP.1WUG2YXREmXFbkBDxno3oAHaGQ?pid=ImgDet&rs=1"
    },
    {
      nome: "mouse Razer",
      descricao: "Abyssus",
      valor: 69.90,
      foto:"https://th.bing.com/th/id/OIP.-KjJXZXihxsAV7hH6UOYhQHaFs?pid=ImgDet&rs=1"
    },
    {
      nome: "mouse Dark Core",
      descricao: "Corsair",
      valor: 150.90,
      foto:"https://th.bing.com/th/id/OIP.KlpyAKt0sgib8-0d3mPAmgHaHa?pid=ImgDet&rs=1"
    }
  ]


  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);

    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho(){
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
  }

}
