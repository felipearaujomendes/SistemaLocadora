import { Component, OnInit } from '@angular/core';
import { ProdutosComponent } from '../produtos.component';
import { ProdutoModel } from '../produtos.model';
import { ProdutosService } from '../produtos.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-create-produtos',
  templateUrl: './create-produtos.component.html',
  styleUrls: ['./create-produtos.component.css']
})
export class CreateProdutosComponent implements OnInit {  
  
  request: ProdutoModel = {
    _id:'',
    __v:0,
    nome:'',
    descricao: '',
    preco: 0
  }
  
  constructor(private produtoService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.produtoService.createProduto(this.request).subscribe(res => {
      this.router.navigate(['/produtos'])
    });
  }

}
