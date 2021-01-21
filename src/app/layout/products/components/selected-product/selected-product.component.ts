import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/utils/state/app/app.reducers';
import { Store } from '@ngrx/store';
import { productsSelector, listProductsSelector } from '../../store/products.selectors';
import { ProductList } from 'src/utils/models/ProductList.model';
import { ListProducts } from '../../store/products.actions';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent implements OnInit {

  productId: number;
  selectedProduct: ProductList;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
    this.route.params.subscribe((params) => this.productId = parseInt(params.id));
   }

  ngOnInit(): void {
    this.store.dispatch(new ListProducts());
    this.store.select(listProductsSelector).subscribe((products: ProductList[]) => {
      this.selectedProduct = products.filter((param) => param.id === this.productId)[0];
    })
  }

  whatsAppShare() {
    let url = document.URL;
    let urlApiWhatsApp = 'https://api.whatsapp.com/send?text=';
    let productName = this.selectedProduct.name;
    let preparatedUrl = urlApiWhatsApp + productName + ' - ' + url;
    return window.open(preparatedUrl, '_blank');
  }

  whatsAppSend() {
    /* TODO - ADICIONAR PREENCHIMENTO AUTOMATICO DO TELEFONE DE ACORDO COM O PERFIL PREENCHIDO */
    let url = document.URL;
    let urlApiWhatsApp = 'https://api.whatsapp.com/send?phone=5515981657563&text=Olá, gostaria de mais informações sobre esse produto - ';
    let productName = this.selectedProduct.name;
    let preparatedUrl = urlApiWhatsApp + productName + ' - ' + url;
    return window.open(preparatedUrl, '_blank');
  }
}
