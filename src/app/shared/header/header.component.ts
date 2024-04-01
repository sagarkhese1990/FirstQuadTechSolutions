import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 showMenu = false;
 @Input() brandLogo: string = 'assets/images/logo.png';
 toggleMenu():void {
  this.showMenu = !this.showMenu;
 }
}
