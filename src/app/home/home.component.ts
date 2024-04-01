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
      cardTitle: 'Reliable Software Solutions',
      cardDescription: 'We strive to provide the industry standard software solutions, our solutions can be benchmarked against Cost, Quality & Speed in line with our customer expectations.'
    },
    {
      icon: 'graph-up-arrow',
      cardTitle: 'Web Analysis',
      cardDescription: 'We analyse and research related web platforms before proposing any website or web application solutions'
    },
    {
      icon: 'person',
      cardTitle: 'Priority Support',
      cardDescription: 'Our team provides prioritised customer support along with the seamless coordination as per client needs.'
    },
    {
      icon: 'gear',
      cardTitle: 'Integrity',
      cardDescription: 'Our business principles are based on consistency, corporate governance, a client-first approach and ethical business practices.'
    },
    {
      icon: 'pie-chart-fill',
      cardTitle: 'Evolution',
      cardDescription: 'We believe in evolution and  adaptability with industry trends, challenge the status quo with improvisation.'
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
      description : 'While correct use of technology has long been an important factor in business success, the need for relevant IT solutions is witnessing an unprecedented growth in today’s market.',
      icon: 'lightbulb-fill',
      routePath: 'services/it-solutions'
    },
    {
      name: 'Professional Training',
      description : 'We provide professional training to working professionals as well as students to gain expertise in specific areas, and enable them to grab opportunities aligned to their career aspirations.',
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
      name: 'Contract Staffing',
      description : 'The industry veterans have joined hands to provide relevant IT solutions, endeavour is to assist companies in staff augmentation through managed services while companies can focus on their core business.',
      icon: 'people-fill',
      routePath: 'services/contract-staffing'
    }
  ];
}
