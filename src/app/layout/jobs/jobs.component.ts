import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterLinkActive } from "@angular/router";
import { filter } from 'rxjs/operators';

declare var $: any;

@Component({
  templateUrl: "./jobs.component.html",
  styleUrls: ["./jobs.component.scss"]
})

export class JobsComponent implements OnInit {
  
  pathCustom: any;
  constructor(private router: Router) { 
    
  }

  ngOnInit() { 

  
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
    el.scrollIntoView();
  }
}



