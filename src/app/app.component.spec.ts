import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent } from './shared';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [
      HeaderComponent,
      FooterComponent
    ],
    imports:[ CommonModule, RouterModule ]
  });
  beforeEach(() => ( spectator = createComponent()));
  it('should create component', () => {
    expect(spectator.component).toBeTruthy();
  })
});

//Test Driven Development
// should create component