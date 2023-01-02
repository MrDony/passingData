import { Component } from '@angular/core';

@Component({
  selector: 'app-using-output-parent',
  templateUrl: './using-output-parent.component.html',
  styleUrls: ['./using-output-parent.component.css']
})
export class UsingOutputParentComponent {

  parent_message="";
  recieveMessage($event: string)
  {
    this.parent_message=$event;
  }

}
