import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent implements OnInit{
  public produits: any[] = [];

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
      this.produits = this.dataServ.getProduits();
  }
}
