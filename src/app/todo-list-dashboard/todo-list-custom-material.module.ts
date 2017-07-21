import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdTabsModule, MdButtonModule, MdCheckboxModule,
  MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
  MdInputModule, MdIconModule, MdChipsModule, MdMenuModule, MdSelectModule
} from '@angular/material';

@NgModule({
  imports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
    MdInputModule, MdIconModule, MdChipsModule, MdMenuModule, MdSelectModule],
  exports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
    MdInputModule, MdIconModule, MdChipsModule, MdMenuModule, MdSelectModule]
})

export class TodoListCustomMaterialModule { };
