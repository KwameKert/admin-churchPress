import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule, MatDividerModule, MatNativeDateModule,MatSelectModule} from '@angular/material';
import { DeleteItemComponent } from '../modules/shared/delete-item/delete-item.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CKEditorModule } from 'ng2-ckeditor';
import { ExcerptFilter } from './excerpts.pipe';

@NgModule({
  declarations: [DeleteItemComponent, ExcerptFilter],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatDialogModule,
    NgxUiLoaderModule,
    NgxSkeletonLoaderModule,
    CKEditorModule,
    
  ],
  providers: [  
    MatDatepickerModule,  
  ],
  exports: [
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatStepperModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    DeleteItemComponent,
    NgxUiLoaderModule,
    NgxSkeletonLoaderModule,
    CKEditorModule,
    ExcerptFilter
  ],
  entryComponents: [DeleteItemComponent]
})
export class SharedModule { }
