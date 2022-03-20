import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {

  contactForm = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('name', this.contactForm.value.fullname);
    formData.append('email', this.contactForm.value.email);
    formData.append('message', this.contactForm.value.message);

    this.http.post('https://formspree.io/f/xjvloplj', formData)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });

    this.contactForm.reset();
  }
}
