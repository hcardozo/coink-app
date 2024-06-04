import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent  implements OnInit {

  public formGroupPhoneNumber = this._formBuilder.group({
    phoneNumber: ['', Validators.required],
  });

  public formGroupAccount = this._formBuilder.group({
    account: ['', Validators.required],
  });

  public formGroupPolicies = this._formBuilder.group({
    policies: ['', Validators.required],
  });


  public title = 'NÚMERO CELULAR';
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {}
}
