import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private produits : any[] = [
    {id: 1, nom: "produit1", prix: 99.99},
    {id: 2, nom: "produit2", prix: 59.99},
    {id: 3, nom: "produit3", prix: 39.99}
  ];

  constructor() { }

  getFakeProduits() {
    return this.produits;
  }

  addProduit(newProduit: any) {
    this.produits.push(newProduit);
  }
}