import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    // View control variables
    isHomeSelected = false;
    isProductsSelected = false;
    isContactSeleceted = false;

    constructor(private router: Router) { }

    ngOnInit() {
        // Open Products initialy
        this.router.navigateByUrl('/products');
        this.isProductsSelected = true;
    }

    resetControlViewVariables() {
        this.isHomeSelected = false;
        this.isProductsSelected = false;
        this.isContactSeleceted = false;
    }
}
