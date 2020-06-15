import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassTypeComponent } from './class-type/class-type.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ClassesListComponent, ClassTypeComponent],
  imports: [
    CommonModule
  ]
})
export class ClassesModule { }
