import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-two-way-parent',
  templateUrl: './valid-two-way-parent.component.html',
  styleUrls: ['./valid-two-way-parent.component.css']
})
export class ValidTwoWayParentComponent implements OnInit {


  parent_message: { id: any, name: any }[] = [
  ];

  parent_reciever: any;
  send_button_hidden: boolean = false;
  edit_button_hidden: boolean = true;
  editing_element_index: number = 0;

  myForm: FormGroup;

  constructor(private fromBuilder: FormBuilder) { }
  ngOnInit() {
    this.myForm = this.fromBuilder.group(
      {
        id: ['', [
          Validators.required,
          Validators.min(1)
        ]],
        name: ['', [
          Validators.required,
          Validators.minLength(5)
        ]]
      }
    );
  }

  get get_id() { return this.myForm?.get('id'); }
  get get_name() { return this.myForm?.get('name'); }

  matSendData()
  {
    const element={id:this.myForm.get('id')?.value , name: this.myForm.get('name')?.value};
    console.log(element);
    this.parent_message.push(element);
    let idField = (<HTMLInputElement>document.getElementById("id-input-field"));
    let nameField = (<HTMLInputElement>document.getElementById("name-input-field"));
    idField.value = "";
    nameField.value = "";
    document.getElementById("id-input-field")?.focus();
  }

  recieveInParent($event: number) {
    console.log("recieve-in-parent:" + $event);
    this.parent_reciever = $event;
    let i = this.parent_reciever;
    this.editing_element_index = i;
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

  commitEdit() {
    const element = { id: this.get_id?.value, name: this.get_name?.value };
    console.log(element);
    console.log(this.parent_message.at(this.editing_element_index));
    this.parent_message[this.editing_element_index] = element;
    this.edit_button_hidden = true;
    this.send_button_hidden = false;
    let idField = (<HTMLInputElement>document.getElementById("id-input-field"));
    let nameField = (<HTMLInputElement>document.getElementById("name-input-field"));
    idField.value = "";
    nameField.value = "";
  }
}
