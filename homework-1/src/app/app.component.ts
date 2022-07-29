import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passConfValidator } from './confirm-pass';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'homework-1';
  signupForm: FormGroup;
  public value: boolean = false;
  check = false;
  display = false;
  info = '';
  arr = [];
  arr2 = [];
  email = '';
  password = '';
  confirmPass = '';
  phoneNumber = '';
  nickname = '';
  website = '';
  ngOnInit() {
    this.signupForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9]+'),
          Validators.minLength(7),
        ]),
        confirmPass: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9]+'),
          Validators.minLength(7),
        ]),
        nickname: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9-]*$'),
        ]),
        phoneNumber: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[(+995)d{9}]*$'),
          Validators.minLength(13),
          Validators.maxLength(13),
        ]),
        website: new FormControl(null, [
          Validators.required,
          Validators.pattern(
            '^((https?|ftp|smtp)://)?(www.)?[a-z0-9]+.[a-z]+(/[a-zA-Z0-9#]+/?)*$'
          ),
        ]),
        checkbox: new FormControl(null, [Validators.required]),
      },
      { validators: passConfValidator }
    );
  }
  onSubmit() {
    console.log(this.signupForm);
    if (this.signupForm.valid) this.check = true;
    this.arr.push({
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      confirmPass: this.signupForm.value.confirmPass,
      nickname: this.signupForm.value.nickname,
      phoneNumber: this.signupForm.value.phoneNumber,

      website: this.signupForm.value.website,
    });
    console.log(this.signupForm.value);
    this.display = true;
    // console.log(this.signupForm.valid);
  }
  isAnswered(): boolean {
    if (this.signupForm.valid && this.signupForm.touched === true) return false;
    else return true;
  }
  fillFields(i: number) {
    (this.email = this.arr[i].email),
      (this.password = this.arr[i].password),
      (this.confirmPass = this.arr[i].confirmPass);
    this.nickname = this.arr[i].nickname;
    this.phoneNumber = this.arr[i].phoneNumber;
    this.website = this.arr[i].website;
    console.log(i, this.arr[i].email);
  }
  removeuser(i: number) {
    this.display = false;
    console.log(i);
    console.log(this.arr2);
    for (let j = 0; j < this.arr.length; j++) {
      this.arr2 = this.arr;
    }
    console.log(this.arr2);

    this.arr = [];
    for (let j = 0; j < this.arr2.length; j++) {
      if (j !== i) {
        this.arr.push(this.arr2[j]);
        console.log(this.arr2[j]);
      }
    }
    this.arr2 = [];
    console.log(this.arr2);
  }
}
