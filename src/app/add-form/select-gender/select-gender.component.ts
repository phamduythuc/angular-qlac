import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-select-gender',
  templateUrl: './select-gender.component.html',
  styleUrls: ['./select-gender.component.scss'],
})
export class SelectGenderComponent implements OnInit {
  @Input() require: string = '';
  @Input() label: string = '';
  @Input() control!: FormControl | any;
  required = false;
  constructor() {}
  ngOnInit(): void {
    if (this.require === 'required') {
      this.required = true;
    }
  }
}
