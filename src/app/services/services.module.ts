import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { ItSolutionsComponent } from './it-solutions/it-solutions.component';
import { ProfessionalTrainingComponent } from './professional-training/professional-training.component';
import { EmploymentSolutionsComponent } from './employment-solutions/employment-solutions.component';
import { ContractStaffingComponent } from './contract-staffing/contract-staffing.component';


@NgModule({
  declarations: [
    ServicesComponent,
    ItSolutionsComponent,
    ProfessionalTrainingComponent,
    EmploymentSolutionsComponent,
    ContractStaffingComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
