import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoModel } from './produtos.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private url = "http://localhost:8000/api/produtos";

  constructor(private http: HttpClient) { }

  getProdutos():Observable<ProdutoModel>{
    return this.http.get<ProdutoModel>(this.url);
  }

  createProduto(request:ProdutoModel):Observable<ProdutoModel>{
    debugger;
      return this.http.post<ProdutoModel>(this.url, request);
  }

  getProduto(id:string):Observable<ProdutoModel>{
    debugger;
    const _url = `${this.url}/${id}` 
    return this.http.get<ProdutoModel>(_url);
  }

    updateProduto(id: string, request:ProdutoModel):Observable<ProdutoModel>{
    const _url = `${this.url}/${id}` 
    return this.http.put<ProdutoModel>(_url, request);
  }

  deleteProduto(id: string):Observable<ProdutoModel>{
    const _url = `${this.url}/${id}` 
    return this.http.delete<ProdutoModel>(_url);
  }
}
