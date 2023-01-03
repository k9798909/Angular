import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MallComponent } from './components/mall/mall.component';

const routes: Routes = [
  { path: 'product', component: MallComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
