import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-using-output-child',
  templateUrl: './using-output-child.component.html',
  styleUrls: ['./using-output-child.component.css']
})
export class UsingOutputChildComponent {

  child_message:string="heelllooo";
  @Output() messageEvent=new EventEmitter<string>();

  sendMessage()
  {
    this.messageEvent.emit(this.child_message);
  }
}
