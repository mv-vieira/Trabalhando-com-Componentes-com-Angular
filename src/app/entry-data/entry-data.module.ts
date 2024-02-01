import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EntryDataComponent } from './entry-data.component';

@NgModule({
  imports: [FormsModule],
  declarations: [EntryDataComponent],
  exports: [EntryDataComponent],
})
export class EntryDataModule {}
