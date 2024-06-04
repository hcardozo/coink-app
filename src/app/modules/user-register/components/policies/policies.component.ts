import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
})
export class PoliciesComponent  implements OnInit {

  @Input() public form!: FormGroup;
  
  constructor() { }

  ngOnInit() {}

}
