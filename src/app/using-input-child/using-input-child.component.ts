import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-using-input-child',
  templateUrl: './using-input-child.component.html',
  styleUrls: ['./using-input-child.component.css']
})
export class UsingInputChildComponent {



  edit_fields_hidden:any=true;
  editing_element_index:number=0;
  @Input() child_message: { id: any, name: any }[] = [];



  deleteElement(i: number) {
    this.child_message.splice(i,1);
  }

  editElement(i: number) {
    this.edit_fields_hidden=false;
    let elementId=this.child_message.at(i)?.id;
    let elementName=this.child_message.at(i)?.name;
    (<HTMLInputElement>document.getElementById("id-edit-field")).value=elementId;
    (<HTMLInputElement>document.getElementById("name-edit-field")).value=elementName;
    this.editing_element_index=i;
    (<HTMLInputElement>document.getElementById("id-edit-field")).focus();
  }
  commitEdit(arg0: string,arg1: string) {
    const element={id:arg0,name:arg1};
    console.log(element);
    console.log(this.child_message.at(this.editing_element_index));
    this.child_message[this.editing_element_index]=element;
    this.edit_fields_hidden=true;
  }
}
