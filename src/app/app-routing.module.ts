import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./modules/routing-test/components/page-not-found/page-not-found.component";
import { MainPageComponent } from './modules/routing-test/components/main-page/main-page.component';
import { SubPageComponent } from './modules/routing-test/components/sub-page/sub-page.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
  { path: 'sub', component: SubPageComponent },
  { path: 'sub/:id', component: SubPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

/*
const ROUTES: Routes = [
  { 
    path: '',
    canActivate: [Guards],
    children: [
      {
        path: '',
        loadChildren: () => import('./app.module').then(x => x.AppModule),
        data: {
          value: 'value'
        }
      },
      {
        path: 'details',
        loadChildren: () => import('./app.details.module').then(x => x.AppDetailsModule),
        outlet: 'aux'
      },
    ]
  }
];
*/

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }