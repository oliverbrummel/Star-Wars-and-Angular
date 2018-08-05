import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StarwarsService } from './starwars.service';
import { ListComponent } from './list/list.component';
import { MyAngularMaterialModule } from './custom-modules/my-angular-material/my-angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyAngularMaterialModule
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
