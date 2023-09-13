import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './errors/pages/page-not-found/page-not-found.component';
import { SearchBarComponent } from './components/search-bar/search-bar/search-bar.component';




@NgModule({
  declarations: [
    PageNotFoundComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SearchBarComponent
  ]
})
export class CoreModule { }
