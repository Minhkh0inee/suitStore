import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {GetStartedComponent} from "./pages/get-started/get-started.component";
import {EventComponent} from "./pages/event/event.component";
import {FitGuideComponent} from "./pages/fit-guide/fit-guide.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, title: "Home"},
  {path: 'collection/suit', component:ShopComponent},
  {path: 'get-started', component:GetStartedComponent},
  {path: 'event', component: EventComponent},
  {path: 'fit-guide', component: FitGuideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
