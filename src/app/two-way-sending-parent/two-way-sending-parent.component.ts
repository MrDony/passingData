import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-sending-parent',
  templateUrl: './two-way-sending-parent.component.html',
  styleUrls: ['./two-way-sending-parent.component.css']
})
export class TwoWaySendingParentComponent {

  parent_message: { id: any, name: any }[] = [
  ];

  parent_reciever: any;
  send_button_hidden: boolean = false;
  edit_button_hidden: boolean = true;
  editing_element_index: number=0;

  sendData(_id: any, _name: any) {
    const element = { id: _id, name: _name };
    this.parent_message.push(element);
    let idField = (<HTMLInputElement>document.getElementById("id-input-field"));
    let nameField = (<HTMLInputElement>document.getElementById("name-input-field"));
    idField.value="";
    nameField.value="";
    document.getElementById("id-input-field")?.focus();
  }

  recieveInParent($event: number) {
    console.log("recieve-in-parent:"+$event);
    this.parent_reciever = $event;
    let i = this.parent_reciever;
    this.editing_element_index=i;
    let elementId = this.parent_message.at(i)?.id;
    let elementName = this.parent_message.at(i)?.name;

    let idField = (<HTMLInputElement>document.getElementById("id-input-field"));
    let nameField = (<HTMLInputElement>document.getElementById("name-input-field"));
    this.send_button_hidden = true;
    this.edit_button_hidden = false;
    idField.value = elementId;
    nameField.value = elementName;
    idField.focus();

  }

  commitEdit(arg0: string, arg1: string) 
  {
    const element={id:arg0,name:arg1};
    console.log(element);
    console.log(this.parent_message.at(this.editing_element_index));
    this.parent_message[this.editing_element_index]=element;
    this.edit_button_hidden=true;
    this.send_button_hidden=false;
    let idField = (<HTMLInputElement>document.getElementById("id-input-field"));
    let nameField = (<HTMLInputElement>document.getElementById("name-input-field"));
    idField.value="";
    nameField.value="";
  }

}
