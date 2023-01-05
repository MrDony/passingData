import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoWaySendingComponent } from './two-way-sending/two-way-sending.component';
import { UsingInputChildComponent } from './using-input-child/using-input-child.component';
import { UsingInputParentComponent } from './using-input-parent/using-input-parent.component';
import { UsingInputComponent } from './using-input/using-input.component';
import { UsingOutputComponent } from './using-output/using-output.component';
import { ValidTwoWayComponent } from './valid-two-way/valid-two-way.component';

const routes: Routes = [
  {
    path:'parent-child-1',component:UsingInputComponent,
    children:[
      {
        path:'parent-child-1-parent',component:UsingInputParentComponent,
        children:[
          {path:'parent-child-1-child',component:UsingInputChildComponent,pathMatch:'full'}
        ]
      }
    ]
  },
  {
    path:'child-parent-1',component:UsingOutputComponent
  },
  {
    path:'two-way-sending',component:TwoWaySendingComponent
  },
  {
    path:'valid-two-way',component:ValidTwoWayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
