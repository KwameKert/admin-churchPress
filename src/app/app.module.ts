import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent ,SidebarComponent,FooterComponent} from './layouts';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultComponent } from './layouts/default/default.component';
import {  MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, 
  MatMenuModule, MatListModule } from '@angular/material';
  import { ToastrModule } from 'ngx-toastr';
  import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { MatSidenavModule,  MatCardModule, MatTableModule, MatPaginatorModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { DatePipe } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultComponent,
   
    
  ],
  imports: [
    CKEditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,  
    MatCardModule, 
    MatTableModule, 
    MatPaginatorModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ToastrModule.forRoot(), 
    
  ],
  providers: [ DatePipe, { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
