import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Popover } from '../popover/popover.service';
import { UserAuthService } from '../_services/userAuth.service';

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
    isAdminSeleceted = false;

    isUserLogedIn = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authentication: UserAuthService,
        private popper: Popover) { }

    ngOnInit() {
        this.authentication.currentUser.subscribe(
            (user) => {
                if (user) {
                    this.isUserLogedIn = true;
                } else {
                    this.isUserLogedIn = false;
                }
            }
        );
        // Open Home initialy
        this.router.navigateByUrl('/home');
        this.isHomeSelected = true;
    }

    /**
     * It will send user to login page if he is not loged in, otherwise it will logout
     * @name loginLogout
     */
    loginLogout() {
        if (this.isUserLogedIn) {
            this.authentication.logout();
            // Go back to home after logout if the user is in admin page
            if (this.router.url === '/admin') {
                this.router.navigateByUrl('/home');
            }
        } else {
            this.router.navigateByUrl('/login');
        }
    }

    /**
     * It will  reset control view variables to default values
     * @name resetControlViewVariables
     */
    resetControlViewVariables() {
        this.isHomeSelected = false;
        this.isProductsSelected = false;
        this.isContactSeleceted = false;
        this.isAdminSeleceted = false;
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
