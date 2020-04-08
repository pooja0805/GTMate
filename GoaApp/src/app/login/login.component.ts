import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../shared/user.service';


declare var M: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset();
      this.userService.selectedUser = {
        _id:"",
        email:"",
        pass:"",
        cpass:""
      }
  }

  onSubmit(form : NgForm) {
    this.userService.postUser(form.value).subscribe((res) => {
      this.resetForm(form);
      M.toast({ html: 'Saved Successfully', classes: 'rounded' });
    });
  }
}