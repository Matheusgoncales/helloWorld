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
  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  addProdutoCarrinho(produto: any){
    this.bdtemp.addProdutoCarrinho(produto);
  }
}
