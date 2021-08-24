import { Component, Input, OnInit } from '@angular/core'; import { User } from '../models/User';
@Component({
  selector: 'fp-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.css']
})
export class PlateComponent implements OnInit {
  @Input()
  user: User;
  plateImgPath = '../../assets/images/plateImages/';
  fruitEmpty = `${this.plateImgPath}fruit-empty.png`; grainDairyEmpty = `${this.plateImgPath}graindairy-empty.png`; proteinEmpty = `${this.plateImgPath}protein-empty.png`; vegEmpty = `${this.plateImgPath}veg-empty.png`;
  fruitFull = `${this.plateImgPath}fruit-full.png`; grainDairyFull = `${this.plateImgPath}graindairy-full.png`; proteinFull = `${this.plateImgPath}protein-full.jpg`; vegFull = `${this.plateImgPath}veg-full.jpg`;
  constructor() { }
  ngOnInit() {
  }
}
