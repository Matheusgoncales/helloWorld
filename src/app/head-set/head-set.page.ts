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
      valor: 199.90,
      foto:"https://th.bing.com/th/id/R.f8e07ca5e0ae1e0a32d9ab9f3c92870e?rik=2iaCDBVdkswA4g&pid=ImgRaw&r=0"
    },
    {
      nome: "Head-set razer",
      descricao: "Head-set preto e verde",
      valor: 299.99,
      foto:"https://th.bing.com/th/id/R.240f195ad7e2aa7ca2dc12f5d79a1fa0?rik=KjNLRff3UPCajg&pid=ImgRaw&r=0"
    },
    {
      nome: "Head-set logitech",
      descricao: "Head-set preto e azulo",
      valor: 240.90,
      foto:"https://www.bhphotovideo.com/images/images2500x2500/logitech_981_000701_g233_prodigy_wired_gaming_1374578.jpg"
    },
    {
      nome: "Head-set Astro",
      descricao: "Head-set branco e azul",
      valor: 150.90,
      foto:"https://www.bhphotovideo.com/images/images2000x2000/astro_gaming_939_001845_a10_headset_for_ps4_1565910.jpg"
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

