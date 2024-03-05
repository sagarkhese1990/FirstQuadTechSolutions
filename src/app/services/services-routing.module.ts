import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../shared/shared.module';
import { ItSolutionsComponent } from './it-solutions/it-solutions.component';
import { ProfessionalTrainingComponent } from './professional-training/professional-training.component';
import { EmploymentSolutionsComponent } from './employment-solutions/employment-solutions.component';
import { ContractStaffingComponent } from './contract-staffing/contract-staffing.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: 'it-solutions',
    component: ItSolutionsComponent
  },
  {
    path: 'professional-training',
    component: ProfessionalTrainingComponent
  },
  {
    path: 'employment-solutions',
    component: EmploymentSolutionsComponent
  },
  {
    path: 'contract-staffing',
    component: ContractStaffingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
