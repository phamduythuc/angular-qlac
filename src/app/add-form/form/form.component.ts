import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as faker from 'faker';
import { createAccount } from '../../core/model/account.model';
import { Account } from '../../core/model/account.model';
import { DataService } from 'src/app/core/services/data.service';
import { checkNumber } from '../validator-number';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formAdd: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    age: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
      checkNumber(),
    ]),
    balance: new FormControl('', [checkNumber()]),
    city: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    employer: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email]),
    state: new FormControl('', []),
    account_number: new FormControl('', []),
  });
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() load = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Input() updateAccount: Account | undefined;
  @Input() isOpenEdit: boolean = false;
  changebutton = false;
  constructor(private el: ElementRef, private dataService: DataService) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    if (this.isOpenEdit) {
      this.changebutton = !this.changebutton;
      this.getValue();
    }
  }
  onClickClose() {
    this.close.emit();
  }
  addData() {
    const newAccount = createAccount({
      balance:
        this.formAdd.value?.balance !== ''
          ? this.formAdd.value?.balance
          : parseInt(faker.finance.amount(0, 99999), 0),
      age: parseInt(this.formAdd.value?.age),
      firstname: this.formAdd.value?.firstname,
      lastname: this.formAdd.value?.lastname,
      city: this.formAdd.value?.city,
      account_number:
        this.formAdd.value?.account_number !== ''
          ? this.formAdd.value?.account_number
          : faker.finance.account(),
      address: this.formAdd.value?.address,
      email: this.formAdd.value?.email,
      employer:
        this.formAdd.value?.employer !== ''
          ? this.formAdd.value?.employer
          : faker.name.lastName(),
      gender: this.formAdd.value?.gender,
      state:
        this.formAdd.value?.state !== ''
          ? this.formAdd.value?.state
          : faker.address.stateAbbr(),
    });
    return newAccount;
  }
  clickSaveAccount() {
    this.save.emit();
  }
  updateData() {
    const newAccount = createAccount({
      balance: this.formAdd.value?.balance,
      age: parseInt(this.formAdd.value?.age),
      firstname: this.formAdd.value?.firstname,
      lastname: this.formAdd.value?.lastname,
      city: this.formAdd.value?.lastname,
      account_number: this.formAdd.value?.account_number,
      address: this.formAdd.value?.address,
      email: this.formAdd.value?.email,
      employer: this.formAdd.value?.employer,
      gender: this.formAdd.value?.gender,
      state: this.formAdd.value?.state,
      _id: this.dataService.account?._id,
    });
    return newAccount;
  }
  clickEditAccount() {
    this.edit.emit();
  }
  getValue() {
    const value = {
      balance: this.dataService.account?.balance,
      age: this.dataService.account?.age,
      lastname: this.dataService.account?.lastname,
      firstname: this.dataService.account?.firstname,
      city: this.dataService.account?.city,
      account_number: this.dataService.account?.account_number,
      address: this.dataService.account?.address,
      email: this.dataService.account?.email,
      employer: this.dataService.account?.employer,
      gender: this.dataService.account?.gender,
      state: this.dataService.account?.state,
    };
    return this.formAdd.setValue(value);
  }
}
