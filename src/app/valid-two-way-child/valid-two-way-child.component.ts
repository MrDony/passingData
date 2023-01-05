import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-valid-two-way-child',
  templateUrl: './valid-two-way-child.component.html',
  styleUrls: ['./valid-two-way-child.component.css']
})
export class ValidTwoWayChildComponent {


  edit_fields_hidden:any=true;
  editing_element_index:number=0;

  child_sender:number=0;
  @Output() childEvent=new EventEmitter<number>();

  @Input() child_message: { id: any, name: any }[] = [];

  deleteElement(i: number) {
    this.child_message.splice(i,1);
  }

  editElement(i: number) {
    console.log("child-edit-element");
    this.child_sender=i;
    this.sendToParent();
  }
  sendToParent()
  {
    console.log("child-send-to-parent");
    this.childEvent.emit(this.child_sender);
    console.log(this.child_sender);
  }
}
