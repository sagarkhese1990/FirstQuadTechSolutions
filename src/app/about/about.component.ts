import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  title = 'About Us';
  // For Output decorator
  // changeTitle(title: string) {
  //   this.title = title;
  // }
}
