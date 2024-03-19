import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CoursesComponent } from './courses/courses.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SectionTitleComponent } from './section-title/section-title.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { PageTitleComponent } from './page-title/page-title.component';



@NgModule({
  declarations: [
    BannerComponent,
    CoursesComponent,
    SectionTitleComponent,
    CardComponentComponent,
    PageTitleComponent
  ],
  exports: [
    BannerComponent,
    CoursesComponent,
    SectionTitleComponent,
    CardComponentComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
  ]
})
export class SharedModule { }
