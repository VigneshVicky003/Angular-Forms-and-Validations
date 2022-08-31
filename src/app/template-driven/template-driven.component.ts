import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  public firstname: string = 'Vignesh';
  public surname: any;
  public email: any;

  constructor() { }

  ngOnInit(): void {
  }

  createUser(details: any){
    console.log(details)
  }

  public validation_messages = {
    'firstname' : [
      { type: 'required', message: 'First Name is required' },
      { type: 'pattern', message: 'Only letters are allowed' },
      { type: 'minlength', message: 'Minimum 3 characters are required' },
      { type: 'maxlength', message: 'Maximum 10 characters are allowed' },
    ],
    'email' : [
      { type: 'required', message: 'Email is required' },
      { type: 'email' || 'pattern', message: 'Invalid Email Format' },
    ]
  }

}
