import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent {
  @Input() icon: string = 'info';
  @Input() cardTitle = '';
  @Input() cardDescription = '';
  @Input() index: number = 0;
}
