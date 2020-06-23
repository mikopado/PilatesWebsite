import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { YogaTypeComponent } from './class-type/yoga-type.component';
import { PilatesTypeComponent } from './class-type/pilates-type.component';
import { ComboTypeComponent } from './class-type/combo-type.component';



@NgModule({
  declarations: [ClassesListComponent, YogaTypeComponent, PilatesTypeComponent, ComboTypeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterModule
  ]
})
export class ClassesModule { }
