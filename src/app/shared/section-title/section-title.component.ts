import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent {

 @HostBinding('class.d-block') readonly dBlock = true;
 @HostBinding('class.mb-4') readonly marginBottom = true;
 @Input() titleSuffix = '';
 @Input() titlePreffix = '';
 @Input() titleAlign = 'center';
 @Input() prefixColor = 'black'
 @HostBinding('class') get alignClass() {
  return 'text-' + this.titleAlign;
 };
}
