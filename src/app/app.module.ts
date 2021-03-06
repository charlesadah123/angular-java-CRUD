import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, EmployeeListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
