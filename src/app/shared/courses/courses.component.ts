import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  @Input() image: string = '';
  @Input() courseTitle: string = '';
  @Input() courseDescription: string = '';
}
