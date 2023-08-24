import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-head-set',
  templateUrl: './head-set.page.html',
  styleUrls: ['./head-set.page.scss'],
})
export class HeadSetPage implements OnInit {
  //listaProdutos = [
  //   {colocar o prod aqui}
  // ]

  qtdeItensCarrinho = 0;

  listaProdutos = [
    
    {
      nome: "Head-set red dragon",
      descricao: "Head-set preto e vermelho",
      valor: "199,90",
      foto:""
    },
    {
      nome: "Head-set red dragon",
      descricao: "Head-set preto e vermelho",
      valor: "199,90",
      foto:""
    },
    {
      nome: "Head-set red dragon",
      descricao: "Head-set preto e vermelho",
      valor: "199,90",
      foto:""
    },
    {
      nome: "Head-set red dragon",
      descricao: "Head-set preto e vermelho",
      valor: "199,90",
      foto:""
    }
  ]
produto: any;
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
