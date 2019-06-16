import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAllModule } from '../materials/material-all/material-all.module';
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EmptyLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EmptyLayoutComponent,
    MainLayoutComponent
  ]
})
export class LayoutsModule { }
