import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from '../../services/global-variables.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  signupForm: FormGroup;
  constructor(private router: Router, private globalVariables: GlobalVariableService) {

    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      funcao: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    });
  }
  onSubmit() {
    this.globalVariables.user = {
      name: this.signupForm.get('name')?.value,
      email: this.signupForm.get('email')?.value,
      funcao: this.signupForm.get('funcao')?.value,
      password: this.signupForm.get('password')?.value
    }
    console.log("User added with success!")
    console.log(this.globalVariables.user);

    this.router.navigate(["/app/users"])
  }
}
