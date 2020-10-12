import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CitiesComponent } from './pages/cities/cities.component';
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
} from 'devextreme-angular';

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
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: 'home',
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
  ],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, CitiesComponent],
})
export class AppRoutingModule {}
