import { ThrowStmt } from '@angular/compiler';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { Account } from '../../core/model/account.model';
import { AccountService } from '../../core/services/account.service';
import { FormComponent } from '../../add-form/form/form.component';
import { DataService } from '../../core/services/data.service';
@Component({
  selector: 'app-table-element',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.scss'],
})
export class TableElementComponent implements OnInit {
  @Input() acc: Account[] = [];
  @Output() load = new EventEmitter();
  @Output() button = new EventEmitter();
  @Output() openView = new EventEmitter();
  @ViewChild(FormComponent) formComp!: FormComponent;
  column: any = [];
  constructor(
    private accountService: AccountService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.column = this.dataService.column;
  }
  deleteData(id: any) {
    this.accountService.deleteAccount(id).subscribe((reponse) => {
      this.load.emit();
    });
  }
  updateData(acc: Account) {
    this.button.emit();
    this.dataService.getAccounts(acc);
  }
  viewData(data: Account) {
    this.openView.emit();
    this.dataService.getAccounts(data);
    console.log(data);
  }
}
