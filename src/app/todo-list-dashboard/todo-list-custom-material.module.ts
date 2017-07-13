import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdTabsModule, MdButtonModule, MdCheckboxModule,
  MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule, MdInputModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule, MdInputModule, MdIconModule],
  exports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule, MdInputModule, MdIconModule]
})

export class TodoListCustomMaterialModule { };
