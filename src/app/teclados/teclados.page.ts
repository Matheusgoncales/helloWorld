import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.page.html',
  styleUrls: ['./teclados.page.scss'],
})
export class TecladosPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [

    {
      nome: "Teclado Sharkoon sgk60",
      descricao: "RGB",
      valor: 479.90,
      foto:"https://www.worten.pt/i/834f50bd10ed6bcecb9a2cc4695d4a850907f33b.jpg"
    },
    {
      nome: "razer cyclosa",
      descricao: "RGB ",
      valor: 899.90,
      foto:"https://mlstaticquic-a.akamaihd.net/teclado-gamer-razer-cynosa-chroma-rgb-espanol-D_NQ_NP_792297-MLU29241181918_012019-F.jpg"
    },
    {
      nome: "Teclado Redragon",
      descricao: "Draconic Bluetooth K530w",
      valor: 476.90,
      foto:"https://exitocol.vtexassets.com/arquivos/ids/7352017/teclado-gamer-redragon-k530-draconic-blanco-rgb.jpg?v=637540330515330000"
    },
    {
      nome: "Teclado Positivo",
      descricao: "Positivo",
      valor: 60.90,
      foto:"https://th.bing.com/th/id/R.4bddabf7c44bda0cab2dbd21ee163001?rik=mPEhBD2%2bd6PpjA&pid=ImgRaw&r=0"
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
