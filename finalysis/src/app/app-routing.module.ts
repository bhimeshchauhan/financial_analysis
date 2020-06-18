import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/modules/profile/components/profile.component';
import { HomeComponent } from 'src/modules/home/components/home.component';


const routes: Routes = [ 
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
