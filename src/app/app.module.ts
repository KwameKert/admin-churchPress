import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent ,SidebarComponent,FooterComponent} from './layouts';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultComponent } from './layouts/default/default.component';
//import {MatToolbarModule} from '@angular/material/toolbar'
//import {  MatSidenavModule, MatDividerModule, MatCardModule, MatTableModule, MatListModule,MatPaginatorModule } from '@angular/material';
import {  MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, 
  MatMenuModule, MatListModule } from '@angular/material';
  
import { MatSidenavModule,  MatCardModule, MatTableModule, MatPaginatorModule} from '@angular/material';
//import {MatButtonModule} from '@angular/material/button';
//import { MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatIconModule } from '@angular/material/icon';

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
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
