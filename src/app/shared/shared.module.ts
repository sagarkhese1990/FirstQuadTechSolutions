import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CoursesComponent } from './courses/courses.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CardComponentComponent } from './card-component/card-component.component';



@NgModule({
  declarations: [
    FooterComponent,
    BannerComponent,
    CoursesComponent,
    SectionTitleComponent,
    CardComponentComponent
  ],
  exports: [
    FooterComponent,
    BannerComponent,
    CoursesComponent,
    SectionTitleComponent,
    CardComponentComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule
  ]
})
export class SharedModule { }
