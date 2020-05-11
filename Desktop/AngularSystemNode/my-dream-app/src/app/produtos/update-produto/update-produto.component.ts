import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoModel } from '../produtos.model';

@Component({
  selector: 'app-update-produto',
  templateUrl: './update-produto.component.html',
  styleUrls: ['./update-produto.component.css']
})
export class UpdateProdutoComponent implements OnInit {


  id: string;
  request: ProdutoModel;
  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');  
    debugger;
    this.produtosService.getProduto(this.id).subscribe(res => {
      this.request={
        nome: res.nome,
        descricao: res.descricao,
        preco: res.preco,
        __v: res.__v,
        _id: this.id
      }
    });
  }

  update(){
    this.produtosService.updateProduto(this.id,this.request).subscribe(res => {
      this.router.navigate(['/produtos'])
    })
  }

}
