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
      cardTitle: 'Reliable Software Engineering Services',
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
}
