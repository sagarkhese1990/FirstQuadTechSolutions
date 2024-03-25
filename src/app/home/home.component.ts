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
      cardDescription: 'Our endeavor is to poride industry standone software, we benchmark our solutions with respect to cost, Quality & speed aligned with client expectations.'
    },
    {
      icon: 'graph-up-arrow',
      cardTitle: 'Web Analysis',
      cardDescription: 'We analyse all related web platform before constructing any website or web application'
    },
    {
      icon: 'person',
      cardTitle: 'First Support',
      cardDescription: 'Our team provide better customer support by coordinating with our clients'
    },
    {
      icon: 'gear',
      cardTitle: 'Integrity',
      cardDescription: 'Our businees operations priciples are based on consistency, corporate, governance & client first approach, ethical practises.'
    },
    {
      icon: 'pie-chart-fill',
      cardTitle: 'Evolution',
      cardDescription: 'Continue to evolve with industry trends, questioning status, improvise and adaptability.'
    },
    {
      icon: 'card-checklist',
      cardTitle: 'Accountability',
      cardDescription: 'Beyond technology solution, we emphasise on bringing Value add for our clients mith determinatian & passion to perform.'
    }
  ]; 
  ourServices: Service[] = [
    {
      name: 'IT Solutions',
      description : 'While correct use of technology has long been an important factor in business success, the need for IT solutions is seeing unprecedented growth in today’s market.',
      icon: 'lightbulb-fill',
      routePath: 'services/it-solutions'
    },
    {
      name: 'Professional Training',
      description : 'We provide professional training to working professionals as well as students to gain expertise in specific area and enable them to grab opportunities aligned to their career aspiration.',
      icon: 'person-bounding-box',
      routePath: 'services/professional-training'
    },
    {
      name: 'Employment Solutions',
      description : 'We provide professional training to graduates and provide them legal employment and exposure to real world industry. We help them to foster their skills and experience to match industry demand.',
      icon: 'person-raised-hand',
      routePath: 'services/employment-solutions'
    },
    {
      name: 'Contract Staffing',
      description : 'The industry veterans have joined hands to start IT solution company to help clients in staff accomadation while they focus on core business.',
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
