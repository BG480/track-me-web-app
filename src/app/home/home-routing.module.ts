import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'welcome',
        },
        { path: 'welcome', component: WelcomeComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomeRoutingModule {}