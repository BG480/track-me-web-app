import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home/welcome', pathMatch: 'full'},
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then(m => m.AccountModule)
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "basic-user",
    loadChildren: () => import("./basic-user/basic-user.module").then(m => m.BasicUserModule)
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "panel",
    loadChildren: () => import("./panel/panel.module").then(m => m.PanelModule)
  },
  {
    path: "trip",
    loadChildren: () => import("./trip/trip.module").then(m => m.TripModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
