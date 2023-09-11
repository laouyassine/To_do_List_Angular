import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors/errors.component';
import { PageNotFoundComponent } from './errors/pages/page-not-found/page-not-found.component';
import { SearchBarComponent } from './components/search-bar/search-bar/search-bar.component';



@NgModule({
  declarations: [
    ErrorsComponent,
    PageNotFoundComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
