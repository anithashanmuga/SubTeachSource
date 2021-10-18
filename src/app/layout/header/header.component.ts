import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
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
    public contactForm: FormGroup;

    // City Names
    City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']

    constructor(public fb: FormBuilder, private router: Router) { 

        this.contactForm = fb.group({
			city: ['', Validators.required],
			type: ['', Validators.required]
		});
    }
  

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
      submit() {
        this.isSubmitted = true;
      
        if (this.contactForm.valid) {
            // this.router.navigate(['/contact']);
            this.router.navigate(['contact']);
            this.closeModal();
        }
        else {
			alert('Please select the City and Type')
		}
       
       
      }

      public closeModal() {
        // const video = jQuery('#myModal');
        $('#exampleModal').modal('hide');
	}






}
