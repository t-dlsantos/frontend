import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalVariableService } from '../../services/global-variables.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  signupForm: FormGroup;
  constructor(private router: Router, private globalVariables: GlobalVariableService) {

    this.signupForm = new FormGroup({
      name: new FormControl(this.globalVariables.user?.name, Validators.required),
      email: new FormControl(this.globalVariables.user?.email, [Validators.required, Validators.email]),
      funcao: new FormControl(this.globalVariables.user?.funcao, [Validators.required]),
      password: new FormControl(this.globalVariables.user?.password, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    });
  }
  onSubmit() {
    this.globalVariables.user = {
      name: this.signupForm.get('name')?.value,
      email: this.signupForm.get('email')?.value,
      funcao: this.signupForm.get('funcao')?.value,
      password: this.signupForm.get('password')?.value
    }
    console.log("User edited with success!")
    console.log(this.globalVariables.user);

    this.router.navigate(["/app/users"])
  }
}
