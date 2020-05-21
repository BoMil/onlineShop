import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Popover } from '../popover/popover.service';

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

    constructor(
        private router: Router,
        private popper: Popover) { }

    ngOnInit() {
        // Open Products initialy
        this.router.navigateByUrl('/home');
        this.isHomeSelected = true;
    }

    resetControlViewVariables() {
        this.isHomeSelected = false;
        this.isProductsSelected = false;
        this.isContactSeleceted = false;
    }

    /*
      * This is a method for popover, it will be used later
    */
    show(content: TemplateRef<any>, origin) {
        const ref = this.popper.open<{ skills: number[] }>({
          content,
          //  content: 'Hello world!',
          // content: InsidePopoverComponent,
          origin,
          width: 'auto',
          data: {
            skills: [1, 2, 3]
          }
        });

        ref.afterClosed$.subscribe(res => {
            console.log(res);
        });

    }
}
