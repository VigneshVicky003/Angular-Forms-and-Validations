import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

import {EmailValidator} from "../email.validator";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public user: FormGroup | any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      firstname: ['Vignesh', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z]+")
      ])],
      surname: [''],
      email: ['', [
        Validators.required,
        Validators.email,
        EmailValidator.invalidEmail
      ]]
    })
  }

  get form(){
    return this.user.controls;
  }

  createUser(details: FormGroup){
    console.log(details);
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
      { type: 'invalidEmail' || 'email', message: 'Invalid Email Format' },
    ]
  }

}
