import { Component } from '@angular/core';
import { Service } from '../interfaces/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  ourServices: Service[] = [
    {
      name: 'Software Engineering Services',
      description : 'In today’s market, the demand for relevant software solutions and skilled talent is experiencing unprecedented growth, even though the effective use of technology has always been crucial for business success.',
      icon: 'lightbulb-fill',
      routePath: 'services/it-solutions'
    },
    {
      name: 'Professional Trainings',
      description : 'We provide professional training to working professionals as well as graduates to gain expertise in specific areas and enable them to seize opportunities aligned with their career aspirations. Additionally, we offer legitimate employment and exposure to the real-world industry.',
      icon: 'person-bounding-box',
      routePath: 'services/professional-training'
    },
    {
      name: 'Contract Staffing',
      description : 'Our commitment lies in assisting companies with staff augmentation through managed services tailored to their unique requirements and organizational culture. By doing so, we enable companies to focus on their core business, driving growth and success. ',
      icon: 'people-fill',
      routePath: 'services/contract-staffing'
    },
    {
      name: 'Staffing Agency',
      description : 'Our talent acquisition team excels at identifying, sourcing, and recruiting top talent for companies. We are specialized in matching skill sets and experiences of job seekers with the requirements of available job positions.',
      icon: 'person-raised-hand',
      routePath: 'services/employment-solutions'
    }
  ];
  constructor(private router: Router){}
  redirectToRoute(event: string) {
    this.router.navigateByUrl(event);
  }
}
