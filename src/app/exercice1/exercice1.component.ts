import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  titre: string;
  nom: string;
  isAlert: boolean = false;

  constructor() {
  }


  ngOnInit() {
    this.titre = 'Exercice 1';
    this.nom = 'Guillaume';
  }

  changeAlert() {
    this.isAlert = !this.isAlert;
  }

}
