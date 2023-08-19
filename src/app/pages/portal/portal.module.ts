import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PortalRoutingModule } from './portal-routing.module';
import { HomeoneBannerComponent } from '../portal/homeone-banner/homeone-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
// import { AboutPageComponent } from './components/pages/about-page/about-page.component';
// import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
// import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
// import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
// import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
// import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
// import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
// import { InstructorsPageComponent } from './components/pages/instructors-page/instructors-page.component';
// import { InstructorProfilePageComponent } from './components/pages/instructor-profile-page/instructor-profile-page.component';
// import { SuccessStoriesPageComponent } from './components/pages/success-stories-page/success-stories-page.component';
// import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
// import { EventsPageComponent } from './components/pages/events-page/events-page.component';
// import { EventDetailsPageComponent } from './components/pages/event-details-page/event-details-page.component';
// import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
// import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
// import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
// import { BlogWidgetComponent } from './components/common/blog-widget/blog-widget.component';
// import { CoursesGridPageComponent } from './components/pages/courses-grid-page/courses-grid-page.component';
// import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
// import { CourseDetailsPageComponent } from './components/pages/course-details-page/course-details-page.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { EnrolledCoursesComponent } from './components/dashboard/enrolled-courses/enrolled-courses.component';
// import { WishlistComponent } from './components/dashboard/wishlist/wishlist.component';
// import { MyProfileComponent } from './components/dashboard/my-profile/my-profile.component';
// import { ActiveCoursesComponent } from './components/dashboard/active-courses/active-courses.component';
// import { ReviewsComponent } from './components/dashboard/reviews/reviews.component';
// import { CompletedCoursesComponent } from './components/dashboard/completed-courses/completed-courses.component';
// import { CartComponent } from './components/dashboard/cart/cart.component';
// import { OrdersListComponent } from './components/dashboard/orders-list/orders-list.component';
// import { EditProfileComponent } from './components/dashboard/edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeoneBannerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PortalRoutingModule,
  ]
})
export class PortalModule { }
