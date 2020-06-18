import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/modules/profile/components/profile.component';
import { HomeComponent } from 'src/modules/home/components/home.component';
import { TableComponent } from 'src/modules/table/components/table.component';
import { GraphComponent } from 'src/modules/graph/components/graph.component';
import { AnalysisComponent } from 'src/modules/analysis/components/analysis.component';
import { SettingsComponent } from 'src/modules/settings/components/settings.component';
import { NotificationComponent } from 'src/modules/notification/components/notification.component';


const routes: Routes = [ 
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'table', component: TableComponent },
  { path: 'graph', component: GraphComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
