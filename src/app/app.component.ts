import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { AccountService } from './core/services/account.service';
import { DataService } from './core/services/data.service';
import { Observable, Subject } from 'rxjs';
import {
  Account,
  createAccount,
  createParamSearch,
} from './core/model/account.model';
import { takeUntil } from 'rxjs/operators';
import { Accounts } from './core/data/account';
import { FormComponent } from './add-form/form/form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(FormComponent) form!: FormComponent;
  name = 'Angular ' + VERSION.major;
  account: Account[] = [];
  unSubscribeAll: Subject<any>;
  isOpenAddAccount = false;
  isOpenEditAccount = false;
  selectedAccount: Account | undefined;
  searchStr: string = '';
  total: number = 0;
  currentPage: number = 1;
  totalPage: number = 0;
  accPerPage: number = 0;
  start: number = 0;
  end: number = 0;
  loading: boolean = true;
  table: boolean = false;
  view: boolean = false;
  displayAccount: Account[] = [];
  accountActive: number = 0;
  constructor(
    private accountService: AccountService,
    private dataService: DataService
  ) {
    this.unSubscribeAll = new Subject<any>();
    this.loadDataToLocal();
  }
  ngOnInit(): void {
    this.setCurrentPage();
    this.getAllAccount();
  }
  loadDataToLocal(): void {
    localStorage.setItem('accounts', JSON.stringify(Accounts));
  }
  setCurrentPage(): void {
    this.accPerPage = this.dataService.itemPage;
    this.start = (this.currentPage - 1) * this.accPerPage;
    this.end = this.currentPage * this.accPerPage;
  }

  getAllAccount(): void {
    this.accountService
      .getAccounts(
        createParamSearch({
          last_name: this.searchStr,
          start: this.start,
          limit: this.end,
        })
      )
      .pipe(takeUntil(this.unSubscribeAll))
      .subscribe(
        (resp: Account[]) => {
          console.log(resp);
          console.log(this.start, this.end);
          this.loading = false;
          this.panigation(resp[1]);
          this.renderAccount(resp[0]);
          this.table = true;
        },
        (err: Error) => {
          this.account = [];
        }
      );
  }
  getItemPerPage(acc: any) {
    this.accPerPage = acc;
    this.start = (this.currentPage - 1) * this.accPerPage;
    this.end = this.currentPage * this.accPerPage;
    this.getAllAccount();
  }
  renderAccount(resp: any) {
    return (this.displayAccount = resp);
  }
  panigation(resp: any) {
    this.accountActive = resp;
    this.totalPage = Math.ceil(resp / this.accPerPage);
  }
  nextPage(curent: any) {
    console.log(curent);
    this.start = (curent - 1) * this.accPerPage;
    this.end = curent * this.accPerPage;
    this.getAllAccount();
  }
  prevPage(curent: any) {
    this.start = (curent - 1) * this.accPerPage;
    this.end = curent * this.accPerPage;
    this.getAllAccount();
  }
  openAddAccount(): void {
    this.isOpenAddAccount = !this.isOpenAddAccount;
  }
  openView(): void {
    this.view = !this.view;
  }
  openEdit(): void {
    this.isOpenEditAccount = !this.isOpenEditAccount;
  }

  saveEdit(): void {
    this.accountService
      .editAccount(this.form.updateData())
      .pipe(takeUntil(this.unSubscribeAll))
      .subscribe(
        (resp: Account[]) => {
          this.getAllAccount();

          this.isOpenEditAccount = false;
        },
        (err: Error) => {
          this.account = [];
        }
      );
  }
  saveNew(): void {
    this.accountService
      .addAccount(this.form.addData())
      .pipe(takeUntil(this.unSubscribeAll))
      .subscribe(
        (resp: Account[]) => {
          this.getAllAccount();
          this.isOpenAddAccount = false;
          this.total = resp.length;
        },
        (err: Error) => {
          this.account = [];
        }
      );
  }
  search(): void {
    this.getAllAccount();
  }
}
