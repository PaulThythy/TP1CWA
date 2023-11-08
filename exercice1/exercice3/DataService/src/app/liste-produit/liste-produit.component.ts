import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})


export class ListeProduitComponent implements OnInit {
  produits: any[] = [];
  newProduit: any = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Utilisez la méthode du service pour obtenir les données factices
    this.produits = this.dataService.getFakeProduits();
  }

  addNewProduit() {
    this.dataService.addProduit(this.newProduit);
    this.newProduit = {}; 
  }

}
