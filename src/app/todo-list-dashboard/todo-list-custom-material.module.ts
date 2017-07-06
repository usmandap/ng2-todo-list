import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule,MdToolbarModule,MdCardModule,MdRadioModule,MdGridListModule,MdInputModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule,MdToolbarModule,MdCardModule,MdRadioModule,MdGridListModule,MdInputModule],
  exports: [MdButtonModule, MdCheckboxModule,MdToolbarModule,MdCardModule,MdRadioModule,MdGridListModule,MdInputModule]
})

export class todoListCustomMaterialModule {};