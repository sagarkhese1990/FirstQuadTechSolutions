import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  @Input() title: string = '';
  @Input() backgroundImage = '../../assets/images/about-back1.jpg'
  // @Output() newTitle = new EventEmitter<string>();
  // changeTitle() {
  //   this.newTitle.emit('New Title');
  // }
}
