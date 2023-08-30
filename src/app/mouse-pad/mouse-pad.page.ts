import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-mouse-pad',
  templateUrl: './mouse-pad.page.html',
  styleUrls: ['./mouse-pad.page.scss'],
})
export class MousePadPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [

    {
      nome: "mouse-pad rgb",
      descricao: "mousepad com fita rgb",
      valor: 89.90,
      foto:"https://http2.mlstatic.com/D_NQ_NP_716130-MLB49488536016_032022-O.webp"
    },
    {
      nome: "mouse-pad husky",
      descricao: "mousepad 40cmx90cm",
      valor: 129.99,
      foto:"https://http2.mlstatic.com/D_NQ_NP_983691-MLB52370933668_112022-O.webp"
    },
    {
      nome: "mouse-pad Razer",
      descricao: "mouse-pad verde e preto",
      valor: 69.90,
      foto:"https://images-na.ssl-images-amazon.com/images/I/6128-Vgs1OL._AC_SL1300_.jpg"
    },
    {
      nome: "mouse-pad hyper beast",
      descricao: "colorido",
      valor: 150.90,
      foto:"https://th.bing.com/th/id/R.5ce087a874807cb9fb637f43ade86e83?rik=zAQlSa1R5vVBig&pid=ImgRaw&r=0"
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
