import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlogComponent } from './blog/blog.component';
import { PartnerComponent } from './partner/partner.component';
import { FeaturesComponent } from './features/features.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { AboutComponent } from './about/about.component';
import { FeaturedComponent } from './featured/featured.component';
import { CategoriesComponent } from './categories/categories.component';
import { CoursesComponent } from './courses/courses.component';
import { FeaturedCoursesComponent } from './featured-courses/featured-courses.component';
import { TopRatedCoursesComponent } from './top-rated-courses/top-rated-courses.component';
import { FunfactsComponent } from './funfacts/funfacts.component';
import { FeaturedBoxesComponent } from './featured-boxes/featured-boxes.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { OverviewComponent } from './overview/overview.component';
import { VideoComponent } from './video/video.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    BlogComponent,
    PartnerComponent,
    FeaturesComponent,
    SubscribeComponent,
    FeedbackComponent,
    InstructorsComponent,
    AboutComponent,
    FeaturedComponent,
    CategoriesComponent,
    CoursesComponent,
    FeaturedCoursesComponent,
    TopRatedCoursesComponent,
    FunfactsComponent,
    FeaturedBoxesComponent,
    TopHeaderComponent,
    OverviewComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    BlogComponent,
    PartnerComponent,
    FeaturesComponent,
    SubscribeComponent,
    FeedbackComponent,
    InstructorsComponent,
    AboutComponent,
    FeaturedComponent,
    CategoriesComponent,
    CoursesComponent,
    FeaturedCoursesComponent,
    TopRatedCoursesComponent,
    FunfactsComponent,
    FeaturedBoxesComponent,
    TopHeaderComponent,
    OverviewComponent,
    VideoComponent,
  ]
})
export class SharedModule { }
