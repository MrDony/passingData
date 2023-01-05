import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsingInputComponent } from './using-input/using-input.component';
import { UsingInputParentComponent } from './using-input-parent/using-input-parent.component';
import { UsingInputChildComponent } from './using-input-child/using-input-child.component';
import { UsingOutputComponent } from './using-output/using-output.component';
import { UsingOutputChildComponent } from './using-output-child/using-output-child.component';
import { UsingOutputParentComponent } from './using-output-parent/using-output-parent.component';
import { TwoWaySendingComponent } from './two-way-sending/two-way-sending.component';
import { TwoWaySendingParentComponent } from './two-way-sending-parent/two-way-sending-parent.component';
import { TwoWaySendingChildComponent } from './two-way-sending-child/two-way-sending-child.component';
import { ValidTwoWayComponent } from './valid-two-way/valid-two-way.component';
import { ValidTwoWayParentComponent } from './valid-two-way-parent/valid-two-way-parent.component';
import { ValidTwoWayChildComponent } from './valid-two-way-child/valid-two-way-child.component';

import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsingInputComponent,
    UsingInputParentComponent,
    UsingInputChildComponent,
    UsingOutputComponent,
    UsingOutputChildComponent,
    UsingOutputParentComponent,
    TwoWaySendingComponent,
    TwoWaySendingParentComponent,
    TwoWaySendingChildComponent,
    ValidTwoWayComponent,
    ValidTwoWayParentComponent,
    ValidTwoWayChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
