import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterLinkActive } from "@angular/router";
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';

declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

  pathCustom: any;
  constructor(private router: Router) {

  }


  public ngOnInit() {

    AOS.init({
      // duration: 1200,
    })

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((eventq: any) => {
        // console.log(this.router.url.slice(7, this.router.url.length));
        this.pathCustom = this.router.url.slice(7, this.router.url.length);
        this.scroll(this.pathCustom);
      });
  }

  scroll(id: string) {
    // //console.log(`scrolling to ${id}`);
    let el: any = document.getElementById(id);
    el.scrollIntoView();
  }

}

