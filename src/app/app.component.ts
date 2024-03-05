import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, OnInit } from '@angular/core';
import { BehaviorSubject, window } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'traning-institute';
  isScrolling$ = new BehaviorSubject<boolean>(false);
  isScrollReachedPosition = false;
  brandLogo= 'assets/images/logo.svg'
  constructor(private el: ElementRef) {}
  @HostListener('window:scroll', ['$event']) scrolling(){
    if(document.documentElement.scrollTop >= 100) {
      this.isScrolling$.next(true)
      this.brandLogo = 'assets/images/logo-black.svg'
    }
    else {
      this.isScrolling$.next(false);
      this.brandLogo = 'assets/images/logo.svg'
    }
  }
}
