import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableElementComponent } from './table-element/table-element.component';
import { ColumnComponent } from './column/column.component';

@NgModule({
  declarations: [TableElementComponent, ColumnComponent],
  imports: [CommonModule],
  exports: [TableElementComponent],
})
export class TableModule {}
