import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './components/default/default.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { FarmersMarketsComponent } from './farmers-markets/farmers-markets.component';
import { foodGroupsRoutes } from './food-groups/food-groups.routing';
import { FoodComponent } from './food/food.component';
import { PlateComponent } from './plate/plate.component';
import { RegisterComponent } from './register/register.component';

const fallbackRoute: Route = {
    path: '**',
    component: DefaultComponent
};


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: DefaultComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'farmersMarkets', component: FarmersMarketsComponent },
            { path: 'exercises', component: ExercisesComponent },
            { path: 'nutritionInfo', component: FoodComponent },
            { path: 'myPlate', component: PlateComponent },
            ...foodGroupsRoutes,
            fallbackRoute
        ]

    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }