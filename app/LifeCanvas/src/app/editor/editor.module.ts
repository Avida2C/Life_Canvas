import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { EditorPageRoutingModule } from './editor-routing.module';

import { EditorPage } from './editor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditorPageRoutingModule,
    CKEditorModule
  ],
  declarations: [EditorPage]
})
export class EditorPageModule {}
