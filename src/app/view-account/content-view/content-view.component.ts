import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../core/model/account.model';
@Component({
  selector: 'app-content-view',
  templateUrl: './content-view.component.html',
  styleUrls: ['./content-view.component.scss'],
})
export class ContentViewComponent implements OnInit {
  @Input() title: any;
  @Input() acc: any | Account;
  constructor() {}

  ngOnInit(): void {}
}
