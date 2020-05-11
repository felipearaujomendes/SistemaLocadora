import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { CreateProdutosComponent } from './produtos/create-produtos/create-produtos.component';
import { UpdateProdutoComponent } from './produtos/update-produto/update-produto.component';
import { DeleteProdutoComponent } from './produtos/delete-produto/delete-produto.component';


const routes: Routes = [
  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos/create', component: CreateProdutosComponent},
  {path: 'produtos/update/:id', component: UpdateProdutoComponent},
  {path: 'produtos/delete/:id', component: DeleteProdutoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
