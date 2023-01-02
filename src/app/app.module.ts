import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    TwoWaySendingChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
