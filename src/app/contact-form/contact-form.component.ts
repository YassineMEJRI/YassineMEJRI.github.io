import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: [
  ]
})
export class ContactFormComponent implements OnInit {
  sent: boolean = false;
  contactForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.email ,Validators.required]),
    message: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.contactForm.valid){
      let formData = new FormData();
      formData.append('name', this.contactForm.value.fullname);
      formData.append('replyto', this.contactForm.value.email);
      formData.append('message', this.contactForm.value.message);

      this.http.post('https://formspree.io/f/xjvloplj', formData)
        .subscribe({
          next: (response) => {
            this.contactForm.reset();
            this.sent = true;
          },
          error: (error) => console.log(error),
        });
    }
  }

  get name() { return this.contactForm.get('fullname');}
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

}
