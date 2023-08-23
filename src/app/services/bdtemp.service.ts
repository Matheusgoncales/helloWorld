import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdtempService {

  private bd: any = [];

  constructor() {};

  salvar(chave: string, valor: any){
    if(chave.trim()){
      this.bd[chave] = valor;
      return true;
    }
    return false;
  }

  buscar(chave: string){
    if(chave.trim()){
      return this.bd[chave];
    }
    return null;
  }

  deletar(chave: string){
    if(chave.trim()){
      delete this.bd[chave];
      return true;
    }
    return false;
  }

  addProdutoCarrinho(produto:any){
    // primeiro verifica se o carrino nao existe
    if(!this.bd['carrinho']){
      this.bd['carrinho'] = []; //cria o carrinho
    }

    if(produto){
      // adiciona o produto no final do vtor carrinho
      this.bd['carrinho'].push(produto);
      return true;
    }
    return false;
  }

  removeProdutoCarrinho(posicao: number){
    //remove um elemento na posicao desejada
    this.bd['carrinho'].splice(posicao, 1);
  }

  limparCarrinho(){
    this.bd['carrinho'] = [];
  }
}

