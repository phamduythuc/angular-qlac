import { Injectable } from '@angular/core';
import { Account } from '../model/account.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  account: Account | undefined;
  itemPage: number = 25;
  column = [
    { label: 'Name', width: '20%' },
    { label: 'Age', width: '10%' },
    { label: 'Blance', width: '12%' },
    { label: 'Email', width: '25%' },
    { label: 'Thao Tac', width: '17%' },
  ];
  data_account = {
    name: 'Name',
    age: 'Age',
    email: 'Email',
    address: 'Address',
    city: 'City',
    balance: 'Balance ',
    gender: 'Gender',
    employer: 'Employer',
    state: 'State',
    account_number: 'Account Number',
    _id: 'Id',
  };

  constructor() {}
  getAccounts(acc: Account) {
    return (this.account = acc);
  }
  getItemPage(item: number) {
    this.itemPage = item;
  }
}
