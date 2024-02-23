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
  constructor(private el: ElementRef) {}
  @HostListener('window:scroll', ['$event']) scrolling(){
    if(document.documentElement.scrollTop >= 200) this.isScrolling$.next(true)
    else this.isScrolling$.next(false);
  }
}
