import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { FooterComponent } from './footer/footer.component';
import { ReactBidirectionalRendererComponent } from './react-bidirectional-renderer/react-bidirectional-renderer.component';
import { ModalComponent } from './modal/modal.component';
import { AddProductFormComponent } from './modal/addProductForm/addProductForm.component';
import { DropdownSearchComponent } from './dropdownSearch/dropdownSearch.component';
import { AuthGuard } from './_guards/auth.guard';


// Routes setup
const appRoutes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // // Routes that are protected
    { path: 'products', component: ProductsPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'admin', component: ReactBidirectionalRendererComponent },
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
    ProductSliderComponent,
    FooterComponent,
    ReactBidirectionalRendererComponent,
    ModalComponent,
    AddProductFormComponent,
    DropdownSearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    OverlayModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [], // AuthGuard
  bootstrap: [AppComponent],
  entryComponents: [PopoverComponent, AwesomeTooltipComponent]
})
export class AppModule { }
