import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formInfo: string = 'This is some info about the form';

  constructor() { }

  email: string = 'some@some.com';

  onFormSubmitted(event: any) {
    console.log('Form submitted with message: ' + event.address);
    this.formInfo = 'Form Info: ' + event.address;
  }

}
