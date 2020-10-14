import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { ClientComponent } from './pages/client/client.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  DxDataGridModule,
  DxFormModule,
  DxTemplateModule,
  DxGalleryModule,
  DxVectorMapModule,
  DxButtonModule,
  DxPieChartModule,
  DxHtmlEditorModule,
  DxTileViewModule,
  DxScrollViewModule,
  DxProgressBarModule,
} from 'devextreme-angular';
import { TimePipe } from './shared/pipes/time.pipe';

const routes: Routes = [
  {
    path: 'cities',
    component: CitiesComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
    BrowserModule,
    DxTemplateModule,
    DxGalleryModule,
    DxVectorMapModule,
    DxButtonModule,
    DxPieChartModule,
    DxHtmlEditorModule,
    DxTileViewModule,
    DxScrollViewModule,
    DxProgressBarModule,
  ],
  providers: [AuthGuardService],
  exports: [RouterModule, TimePipe],
  declarations: [
    HomeComponent,
    ClientComponent,
    ProfileComponent,
    CitiesComponent,
    TimePipe,
  ],
})
export class AppRoutingModule {}
