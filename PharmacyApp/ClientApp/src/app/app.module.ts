import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ProductsPageComponent } from './productsPage/productsPage.component';
import { PopoverComponent } from './popover/popover.component';
import { AwesomeTooltipComponent } from './tooltip/tooltip.component';
import { AwesomeTooltipDirective } from './tooltip/tooltip.directive';
import { ProductCardComponent } from './productCard/productCard.component';
import { HomePageComponent } from './homePage/homePage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductSliderComponent } from './productSlider/productSlider.component';


// Routes setup
const appRoutes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // // Routes that are protected
    { path: 'products', component: ProductsPageComponent },
    { path: 'home', component: HomePageComponent },
    // { path: 'tables', component: TablesComponent, canActivate: [AuthGuard] },
    // { path: 'settings', component: UserSettingsComponent, canActivate: [AuthGuard] },

    // // otherwise redirect to login
    // { path: '**', redirectTo: 'login' }
];

@NgModule({
  declarations: [
    AppComponent,
    SvgIconComponent,
    NavbarComponent,
    ProductsPageComponent,
    PopoverComponent,
    AwesomeTooltipComponent,
    AwesomeTooltipDirective,
    ProductCardComponent,
    HomePageComponent,
    CarouselComponent,
    ProductSliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PopoverComponent, AwesomeTooltipComponent]
})
export class AppModule { }
