import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ProductsComponent } from './products/products.component';
import { PopoverComponent } from './popover/popover.component';
import { AwesomeTooltipComponent } from './tooltip/tooltip.component';
import { AwesomeTooltipDirective } from './tooltip/tooltip.directive';


// Routes setup
const appRoutes: Routes = [
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },
    // // Routes that are protected
    { path: 'products', component: ProductsComponent },
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
    ProductsComponent,
    PopoverComponent,
    AwesomeTooltipComponent,
    AwesomeTooltipDirective
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
