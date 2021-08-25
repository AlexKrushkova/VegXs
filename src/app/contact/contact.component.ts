import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
})
export class ContactComponent implements OnInit {
  constructor() {}

  mapOptions: google.maps.MapOptions = {
    center: { lat: 57.046707, lng: 9.935932 },
    zoom : 14, 
 }
 marker = {
    position: { lat: 57.046707, lng: 9.935932 },
 }

  //? Form
  contactForm: FormGroup;
  isSubmitted = false;
  information = {
    name: '',
    email: '',
    message: '',
  };

  //? Submit and reset the form.
  onSubmit() {
    this.isSubmitted = true;
    this.information.name = this.contactForm.value.name;
    this.information.email = this.contactForm.value.email;
    this.information.message = this.contactForm.value.message;
    this.contactForm.reset();
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }
}