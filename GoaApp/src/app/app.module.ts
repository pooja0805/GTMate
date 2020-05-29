import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import{ ActivitiesComponent } from './activities/activities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { BeachComponent } from './beach/beach.component';
import { WaterfallsComponent } from './waterfalls/waterfalls.component';
import { EInfoComponent } from './e-info/e-info.component';
import { ReligiousComponent } from './religious/religious.component';
import { ShoppingsComponent } from './shoppings/shoppings.component';
import { PicnicsComponent } from './picnics/picnics.component';
import { RomanticsComponent } from './romantics/romantics.component';

import { RatingModule } from 'ng-starrating';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SearchComponent } from './search/search.component';
import { AInfoComponent } from './a-info/a-info.component';
import { PackageComponent } from './package/package.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MainbodyComponent,
    LoginComponent,
    ActivitiesComponent,
    ContactUsComponent,
    FaqComponent,
    BeachComponent,
    WaterfallsComponent,
    EInfoComponent,
    ReligiousComponent,
    ShoppingsComponent,
    PicnicsComponent,
    RomanticsComponent,
    UserProfileComponent,
    SignUpComponent,
    SearchComponent,
    AInfoComponent,
    PackageComponent
  ],

  imports: [
    BrowserModule,
    RatingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'userProfile', component: UserProfileComponent, canActivate:[AuthGuard]
      },
      {
        path: 'activitiess', component: AInfoComponent
      },
      {
        path: 'activity', component: SearchComponent
      },
      {
        path:'',component:MainbodyComponent
      },
      {
        path:'sign-up',component:SignUpComponent
      },
      {
        path:'activities', component:ActivitiesComponent
      },
      {
        path:'contact-us', component:ContactUsComponent
      },
      {
        path:'faq', component:FaqComponent 
      },
      {
        path:'beaches',component:BeachComponent
      },
      {
        path:'waterfalls',component:WaterfallsComponent
      },
      {
        path:'religiousPlaces',component:ReligiousComponent
      },
      {
        path:'shoppingPlaces',component: ShoppingsComponent
      },
      {
        path:'picnicSpots',component: PicnicsComponent
      },
      {
        path:'romanticPlaces',component: RomanticsComponent
      },
      {
        path:'e-info/:_id',component: EInfoComponent
      },
      {
        path:'package',component: PackageComponent
      }
    ]),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard ,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
