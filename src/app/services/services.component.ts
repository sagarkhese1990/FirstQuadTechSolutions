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
      name: 'IT Solutions',
      description : 'While correct use of technology has long been an important factor in business success, the need for IT solutions is seeing unprecedented growth in today’s market.',
      icon: 'lightbulb-fill',
      routePath: 'services/it-solutions'
    },
    {
      name: 'Professional Training',
      description : 'We provide professional training to working professionals as well as students to gain expertise in specific area and enable them to switch/join more demanding job.',
      icon: 'person-bounding-box',
      routePath: 'services/professional-training'
    },
    {
      name: 'Employment Solutions',
      description : 'We provide professional training to graduates and provide them legal employment and exposure to real world software projects. We help them to foster their skills and experience to enter into challenging IT world.',
      icon: 'person-raised-hand',
      routePath: 'services/employment-solutions'
    },
    {
      name: 'Contract Staffing',
      description : 'The industry veterans have joined hands to start a software development company with an intent to serve the IT industry in various ways.',
      icon: 'people-fill',
      routePath: 'services/contract-staffing'
    }
  ]
  constructor(private router: Router){}
  redirectToRoute(event: string) {
    this.router.navigateByUrl(event);
  }
}
