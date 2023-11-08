import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private produits : Produit[] = [
    {id: 1, nom: "produit1", prix: 99.99},
    {id: 2, nom: "produit2", prix: 59.99},
    {id: 3, nom: "produit3", prix: 39.99}
  ];

  constructor() { }

  public getProduits(): Produit [] {
    return this.produits;
  }

  produit = new Produit();

  public addProduit(){
    this.produits.push();
  }
}

export class Produit{
  id: number;
  nom: string;
  prix: number;
}