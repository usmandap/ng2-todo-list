import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdTabsModule, MdButtonModule, MdCheckboxModule,
  MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
  MdInputModule, MdIconModule, MdChipsModule, MdMenuModule, MdSelectModule, MdProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
    MdInputModule, MdIconModule, MdChipsModule, MdMenuModule, MdSelectModule, MdProgressSpinnerModule],
  exports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
    MdInputModule, MdIconModule, MdChipsModule, MdMenuModule, MdSelectModule, MdProgressSpinnerModule]
})

export class TodoListCustomMaterialModule { };
