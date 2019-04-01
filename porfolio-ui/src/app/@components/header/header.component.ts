import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'dx-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

    constructor() {
        
    }

    public toggle(): void {
        var x = document.getElementById("navbar");
        if (x.className === "dx-topnav") {
            x.className += " responsive";
        } else {
            x.className = "dx-topnav";
        }
    }
}