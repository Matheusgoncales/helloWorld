import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {
qtdeItensCarrinho = 0;

  listaProdutos = [

    {
      nome: "Teclado Mecanico M84",
      descricao: "Sem fio compacto",
      valor: 159.90,
      foto:"https://m.media-amazon.com/images/I/71jAUlz7KPL._AC_UF894,1000_QL80_.jpg"
    },
    {
      nome: "Logitech G403",
      descricao: "máxima precisão",
      valor: 359.90,
      foto:"https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/g/4/g403-img01_1.png"
    },
    {
      nome: "Mousepad Colo",
      descricao: "40x90cm",
      valor: 89.90,
      foto:"https://http2.mlstatic.com/D_NQ_NP_940757-MLB54757460909_032023-O.webp"
    },
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

