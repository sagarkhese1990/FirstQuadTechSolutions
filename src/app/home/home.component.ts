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
      cardDescription: 'We are consistently providing good quality of Softwares, which is high in performance and we are trustworthy, honest and responsible'
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
      cardDescription: 'We are consistent, honest and fair and always do what is right'
    },
    {
      icon: 'pie-chart-fill',
      cardTitle: 'Evolution',
      cardDescription: 'Continue to evolve with modern change. Don’t be satisfied with the current status'
    },
    {
      icon: 'card-checklist',
      cardTitle: 'Accountability',
      cardDescription: 'We are personally accountable for delivering on our commitments'
    }
  ]; 
  ourServices: Service[] = [
    {
      name: 'IT Solutions',
      description : 'While correct use of technology has long been an important factor in business success, the need for IT solutions is seeing unprecedented growth in today’s market.',
      icon: 'lightbulb-fill'
    },
    {
      name: 'Professional Training',
      description : 'We provide professional training to working professionals as well as students to gain expertise in specific area and enable them to switch/join more demanding job.',
      icon: 'person-bounding-box'
    },
    {
      name: 'Employment Solutions',
      description : 'We provide professional training to graduates and provide them legal employment and exposure to real world software projects. We help them to foster their skills and experience to enter into challenging IT world.',
      icon: 'person-raised-hand'
    },
    {
      name: 'Contract Staffing',
      description : 'The industry veterans have joined hands to start a software development company with an intent to serve the IT industry in various ways.',
      icon: 'people-fill'
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
