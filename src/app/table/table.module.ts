import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableElementComponent } from './table-element/table-element.component';

@NgModule({
  declarations: [TableElementComponent],
  imports: [CommonModule],
  exports: [TableElementComponent],
})
export class TableModule {}
