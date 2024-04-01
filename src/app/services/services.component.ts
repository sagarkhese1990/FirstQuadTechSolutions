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
      description : 'While the correct use of technology has long been an important factor in business success, the need for IT solutions in today\'s marketplace is growing at an unprecedented rate.',
      icon: 'lightbulb-fill',
      routePath: 'services/it-solutions'
    },
    {
      name: 'Professional Training',
      description : 'We offer professional training to both working professionals and students, enabling them to gain expertise in specific areas and to take advantage of opportunities that match their career aspirations.',
      icon: 'person-bounding-box',
      routePath: 'services/professional-training'
    },
    {
      name: 'Employment Solutions',
      description : 'We provide graduates with professional training, legal employment and exposure to the real world of industry. We help them to develop their skills and experience in line with industry demand.',
      icon: 'person-raised-hand',
      routePath: 'services/employment-solutions'
    },
    {
      name: 'Contract Staffing',
      description : 'The industry veterans have joined forces to create an IT solutions company to help clients with staff accommodation while they focus on their core business.',
      icon: 'people-fill',
      routePath: 'services/contract-staffing'
    }
  ]
  constructor(private router: Router){}
  redirectToRoute(event: string) {
    this.router.navigateByUrl(event);
  }
}
