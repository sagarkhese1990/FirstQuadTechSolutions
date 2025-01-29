import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ISlider } from 'src/app/shared/banner/banner.component';

@Component({
  selector: 'app-professional-training',
  templateUrl: './professional-training.component.html',
  styleUrls: ['./professional-training.component.scss']
})
export class ProfessionalTrainingComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    autoplaySpeed: 5000,
    autoplay: false,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      940: {
        items: 1
      }
    },
    nav: true
  }
  slidesStore: ISlider[] = [
    {
      id: 1,
      heading: 'DevOps With AWS',
      primaryText: '',
      subHeading: 'Streamline Deployment Excellence - Master DevOps with AWS!',
      image: 'assets/images/banner.jpeg'
    },
    {
      id: 2,
      heading: 'DSA, Java with Springboot & Microservices',
      primaryText: '',
      subHeading: 'Master the Art of Building Scalable Solutions: Dive into DSA, Java with Spring Boot, and Microservices!',
      image: 'assets/images/1.png'
    },
    {
      id: 3,
      heading: 'Angular & Basics of HTML, CSS',
      primaryText: '',
      subHeading: 'Build Stunning Web Interfaces: Learn Angular with HTML & CSS Essentials!',
      image: 'assets/images/2.png'
    }
  ]
}
