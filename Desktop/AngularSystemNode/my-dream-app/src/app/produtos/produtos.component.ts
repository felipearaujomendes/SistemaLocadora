import { Component, OnInit } from '@angular/core';
import { ProdutosService } from './produtos.service';
import { ProdutoModel } from './produtos.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  responseProdutos: ProdutoModel;
  constructor(private produtoService:ProdutosService) { }

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
        res => this.responseProdutos = res)
  }

}
