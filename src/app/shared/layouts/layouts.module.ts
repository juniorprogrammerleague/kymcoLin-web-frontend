import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    EmptyLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EmptyLayoutComponent,
    MainLayoutComponent
  ]
})
export class LayoutsModule { }
