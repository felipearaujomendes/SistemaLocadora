import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProdutosComponent } from './produtos/create-produtos/create-produtos.component';
import { FormsModule } from '@angular/forms';
import { UpdateProdutoComponent } from './produtos/update-produto/update-produto.component';
import { DeleteProdutoComponent } from './produtos/delete-produto/delete-produto.component'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CreateProdutosComponent,
    UpdateProdutoComponent,
    DeleteProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
