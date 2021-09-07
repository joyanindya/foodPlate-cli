import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-vegetable-detail',
  templateUrl: './vegetable-detail.component.html',
  styleUrls: ['./vegetable-detail.component.css']
})
export class VegetableDetailComponent implements OnInit {

  vegetableSample = {
    'ounces': 22
};

  constructor() { }

  ngOnInit(): void {
  }

}
