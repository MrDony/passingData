import { Component } from '@angular/core';

@Component({
  selector: 'app-using-input-parent',
  templateUrl: './using-input-parent.component.html',
  styleUrls: ['./using-input-parent.component.css']
})
export class UsingInputParentComponent {
  
  parent_message: { id: any, name: any }[] = [
  ];

  sendData(_id:any,_name:any)
  {
    const element={id:_id,name:_name};
    this.parent_message.push(element);
    document.getElementById("id-input-field")?.focus();
    console.log("focus");
  }
}
