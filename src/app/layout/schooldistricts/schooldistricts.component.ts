import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterLinkActive } from "@angular/router";
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';

@Component({
  selector: "app-schooldistricts",
  templateUrl: "./schooldistricts.component.html",
  styleUrls: ["./schooldistricts.component.scss"]
})

export class SchooldistrictsComponent implements OnInit {
  

  pathCustom: any;
  constructor(private router: Router) { 
    
  }

  ngOnInit() { 

    AOS.init({
      useClassNames: true,
      // initClassName: false,
      animatedClassName: 'animated',
    });

  //   this.router.events.subscribe(event => {
  //     console.log(event);
  //  });
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
    // el.scrollIntoView();
  }
}
