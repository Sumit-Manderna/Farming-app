import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { RemediesComponent } from './remedies/remedies.component';
import { CropRecommendationComponent } from './crop-recommendation/crop-recommendation.component';

const routes: Routes = [
  // { path: '', component: UserInputComponent  },
  { path: 'remedies', component: RemediesComponent },
  { path: 'recommendation', component: CropRecommendationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
