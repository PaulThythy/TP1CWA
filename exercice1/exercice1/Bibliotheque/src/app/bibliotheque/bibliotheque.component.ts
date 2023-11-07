import { Component } from '@angular/core';
import { Livre } from './Livre';

@Component({
  selector: 'app-bibliotheque',
  templateUrl: './bibliotheque.component.html',
  styleUrls: ['./bibliotheque.component.css']
})
export class BibliothequeComponent {

  livres:Livre[] = [
    new Livre("Le livre du bonheur et des saucisses", "Jean-Luc Danduit", 1999),
    new Livre("Mathématiques : Pour la modélisation géométrique, la représentation 3D et la synthèse d'images", "Lionel Garnier", 2007),
    new Livre("Padinspi", "Frédo Lerigolo", 2012),
    new Livre("grghqpreughreughrguhrpgrughgzheauga", "Jean-Michel TombéSurLeClavier", 2021),
    new Livre("A", "B", 1)
  ];

  vLivre = new Livre("", "", 0);
  
  ajoutLivre(){
    this.livres.push(this.vLivre);
  }

}