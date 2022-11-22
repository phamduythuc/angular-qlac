import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Account } from '../../core/model/account.model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  @Output() open = new EventEmitter();
  constructor(private el: ElementRef, private dataService: DataService) {}
  account: any | Account;
  label: any = [];
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
    console.log(this.dataService.account);
    this.account = this.dataService.account;
    this.label = this.dataService.data_account;
    console.log(this.dataService.data_account);
  }
  closeModal(): void {
    this.open.emit();
  }
}
