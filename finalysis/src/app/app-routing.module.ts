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
  {
    path: '' , 
    redirectTo:'/profile',
    pathMatch:'full'
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    data: {bg : 'profile-bg'} 
  },
  { 
    path: 'home', 
    component: HomeComponent,
    data: {bg : 'home-bg'} 
  },
  { 
    path: 'table', 
    component: TableComponent,
    data: {bg : 'table-bg'}  
  },
  { 
    path: 'graph', 
    component: GraphComponent,
    data: {bg : 'graph-bg'}  
  },
  { 
    path: 'analysis', 
    component: AnalysisComponent,
    data: {bg : 'analysis-bg'}  
  },
  { 
    path: 'settings', 
    component: SettingsComponent,
    data: {bg : 'settings-bg'}  
  },
  { 
    path: 'notification', 
    component: NotificationComponent,
    data: {bg : 'notifications-bg'}  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
