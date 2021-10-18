import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';








declare var $: any;

@Component({
    selector: "app-header",
    templateUrl: "header.component.html",
    styleUrls: ["header.component.scss"],
    encapsulation: ViewEncapsulation.None

})

export class HeaderComponent implements OnInit {

    isSubmitted = false;
    modalVisible = false;

    // City Names
    City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
  
    constructor(public fb: FormBuilder, private router: Router) { }
  
    /*########### Form ###########*/
    contactForm = this.fb.group({
      cityName: ['', [Validators.required]]
    })

    ngOnInit() {
        $(function () {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 10) {
                    $('.navbar').addClass('active');
                } else {
                    $('.navbar').removeClass('active');
                }
            });
        });

    }




    changeCity(e:any) {
        console.log(e.value)
        // this.cityName.setValue(e.target.value);
    //    this.cityName.setValue
        //     {
        //   onlySelf: true
        // }
        // )
      }
    
      // Getter method to access formcontrols
      get cityName() {
        return this.contactForm.get('cityName');
      }
    
      /*########### Template Driven Form ###########*/
      onSubmit() {
        this.isSubmitted = true;
        // if (!this.registrationForm.valid) {
        //   return false;
        // } 
        // else {
        //   alert(JSON.stringify(this.registrationForm.value))
        // }
        this.router.navigate(['/contact']);
       

      }






}
