import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { ProteinDetailComponent } from './protein-detail/protein-detail.component';
import { VegetableDetailComponent } from './vegetable-detail/vegetable-detail.component';
import { GrainsDetailComponent } from './grains-detail/grains-detail.component';



@NgModule({
  declarations: [FruitDetailComponent, GrainsDetailComponent, ProteinDetailComponent, VegetableDetailComponent, GrainsDetailComponent],
  imports: [
    CommonModule
  ]
})
export class FoodDetailModule { }
