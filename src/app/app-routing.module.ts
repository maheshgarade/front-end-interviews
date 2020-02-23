import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './HTML5/parent.component';
import { ChildComponent } from './HTML5/child/child.component';


const routes: Routes = [
  {path: 'parent', component: ParentComponent},
  {path: 'child', component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
