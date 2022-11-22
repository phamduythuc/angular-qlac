import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ModalModule } from '../modal/modal.module';
import { ContentViewComponent } from './content-view/content-view.component';
@NgModule({
  declarations: [ViewComponent, ContentViewComponent],
  imports: [CommonModule, ModalModule],
  exports: [ViewComponent],
})
export class ViewAccountModule {}
