import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../produtos.model';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router"

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  id: string;
  produto: ProdutoModel;
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');  
    debugger;
    this.produtosService.getProduto(this.id).subscribe(res => {
      this.produto={
        nome: res.nome,
        descricao: res.descricao,
        preco: res.preco,
        __v: res.__v,
        _id: this.id
      }
    });
  }

  delete(){
    this.produtosService.deleteProduto(this.id).subscribe(res => {
      this.router.navigate(['/produtos'])
    })
  }

}
