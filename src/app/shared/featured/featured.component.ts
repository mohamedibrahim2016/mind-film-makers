import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {

    constructor(
        public router: Router
    ) { }

    featuredBox = [
        {
            icon: `assets/img/featured/icon1.gif`,
            title: `Learn the Latest Top Skills`
        },
        {
            icon: `assets/img/featured/icon2.gif`,
            title: `Learn From Industry Experts`
        },
        {
            icon: `assets/img/featured/icon3.gif`,
            title: `Learn In Your Own Pace`
        },
        {
            icon: `assets/img/featured/icon4.gif`,
            title: `Enjoy Learning From Anywhere`
        }
    ]

}
