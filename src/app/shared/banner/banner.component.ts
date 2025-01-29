import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface ISlider {
  heading: string;
  subHeading: string;
  primaryText: string;
  image: string;
  id: number;
}

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 100,
    autoplaySpeed: 1000,
    autoplay: true,
    navText: ['', ''],
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
      heading: 'Master Angular with Our',
      primaryText: 'Expert-Led Training!',
      subHeading: '🚀 Build Dynamic Web Applications and Boost Your Career! <br/>  💻 Hands-On Projects | 🛠️ Real-World Scenarios ',
      image: 'assets/images/banner.jpeg'
    },
    {
      id: 2,
      heading: 'Java Course',
      primaryText: 'Expert-Led Training!',
      subHeading: '🚀 Build Dynamic Web Applications and Boost Your Career!',
      image: 'assets/images/1.png'
    },
    {
      id: 3,
      heading: 'Springboot Course',
      primaryText: 'Expert-Led Training!',
      subHeading: '🚀 Build Dynamic Web Applications and Boost Your Career!',
      image: 'assets/images/2.png'
    }
  ]
  constructor(private router: Router) {}
  redirectToContact(): void {
    this.router.navigate(['contact']);
  }
}
