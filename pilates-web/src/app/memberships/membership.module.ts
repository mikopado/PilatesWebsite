import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipListComponent } from './membership-list/membership-list.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [MembershipListComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class MembershipModule { }
