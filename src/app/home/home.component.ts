import { Component } from '@angular/core';
import { Service } from '../interfaces/service';
import { YourNeed } from '../interfaces/your-need';
export interface Course {
  image: string;
  courseTitle: string;
  courseDescription: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  yourNeeds: YourNeed[] = [
    {
      icon: 'shield-check',
      cardTitle: 'Reliable Software Solution',
      cardDescription: 'We strive to provide industry standard software, benchmarking our solutions against cost, quality & speed in line with customer expectations.'
    },
    {
      icon: 'graph-up-arrow',
      cardTitle: 'Web Analysis',
      cardDescription: 'We analyse all related web platforms before building any website or web application.'
    },
    {
      icon: 'person',
      cardTitle: 'First Support',
      cardDescription: 'Our team provides better customer support by coordinating with our clients'
    },
    {
      icon: 'gear',
      cardTitle: 'Integrity',
      cardDescription: 'Our business principles are based on consistency, corporate governance, a client-first approach and ethical practices.'
    },
    {
      icon: 'pie-chart-fill',
      cardTitle: 'Evolution',
      cardDescription: 'Evolve with industry trends, challenge the status quo, improvise and adapt.'
    },
    {
      icon: 'card-checklist',
      cardTitle: 'Accountability',
      cardDescription: 'Beyond the technology solution, we focus on delivering value to our customers with determination and passion to perform.'
    }
  ]; 
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
  courses: Course[] = [ 
    {
    image: '../../../assets/images/Asset1.svg',
    courseTitle: 'Front End Develiopnent',
    courseDescription: 'Tets Description',
  },
  {
    image: '../../../assets/images/Asset1.svg',
    courseTitle: 'Front End Develiopnent 1',
    courseDescription: 'Tets Description',
  },
  {
    image: '../../../assets/images/Asset1.svg',
    courseTitle: 'Front End Develiopnent 3',
    courseDescription: 'Tets Description',
  },
  {
    image: '../../../assets/images/Asset1.svg',
    courseTitle: 'Front End Develiopnent',
    courseDescription: 'Tets Description',
  },
  {
    image: '../../../assets/images/Asset1.svg',
    courseTitle: 'Front End Develiopnent 1',
    courseDescription: 'Tets Description',
  },
  {
    image: '../../../assets/images/Asset1.svg',
    courseTitle: 'Front End Develiopnent 3',
    courseDescription: 'Tets Description',
  }
];
}
