import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdTabsModule, MdButtonModule, MdCheckboxModule,
  MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
   MdInputModule, MdIconModule, MdChipsModule, MdMenuModule } from '@angular/material';

@NgModule({
  imports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
     MdInputModule, MdIconModule, MdChipsModule, MdMenuModule],
  exports: [MdTabsModule, MdButtonModule, MdCheckboxModule,
    MdToolbarModule, MdCardModule, MdRadioModule, MdGridListModule,
     MdInputModule, MdIconModule, MdChipsModule, MdMenuModule]
})

export class TodoListCustomMaterialModule { };
