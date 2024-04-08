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
      name: 'Software Solutions',
      description : 'While correct use of technology has long been an important factor in business success, the need for relevant IT solutions is witnessing an unprecedented growth in today’s market.',
      icon: 'lightbulb-fill',
      routePath: 'services/it-solutions'
    },
    {
      name: 'Professional Training',
      description : 'We provide professional training to working professionals as well as graduates to gain expertise in specific areas, and enable them to grab opportunities aligned to their career aspirations.',
      icon: 'person-bounding-box',
      routePath: 'services/professional-training'
    },
    {
      name: 'Employment Solutions',
      description : 'We provide professional training to graduates along with legal employment, and exposure to real world industry. We assist them to foster their skills and experience to match the industry demand.',
      icon: 'person-raised-hand',
      routePath: 'services/employment-solutions'
    },
    {
      name: 'Staffing Services',
      description : 'Our talent acquisition team specializes in identifying, sourcing, and recruiting top talent for companies. Our aim is to assist companies in staff augmentation through managed services, allowing them to concentrate on their core business.',
      icon: 'people-fill',
      routePath: 'services/contract-staffing'
    }
  ];
  constructor(private router: Router){}
  redirectToRoute(event: string) {
    this.router.navigateByUrl(event);
  }
}
